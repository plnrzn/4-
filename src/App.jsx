import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ConcertInfo from './components/ConcertInfo';
import SeatMap from './components/SeatMap';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [message, setMessage] = useState('');
    const [tasks, setTasks] = useState([]);

    // 📋 Список задач для бронирования билетов
    useEffect(() => {
        setTasks([
            { id: 1, title: 'Выбрать место в партере', completed: false },
            { id: 2, title: 'Выбрать место на балконе', completed: false },
            { id: 3, title: 'Забронировать от 2 до 6 мест', completed: false },
            { id: 4, title: 'Проверить сумму заказа', completed: false },
            { id: 5, title: 'Удалить одно место из заказа', completed: false },
            { id: 6, title: 'Очистить всю корзину', completed: false },
            { id: 7, title: 'Подтвердить бронирование', completed: false },
            { id: 8, title: 'Получить номер заказа', completed: false },
            { id: 9, title: 'Не превышать лимит 6 мест', completed: false },
            { id: 10, title: 'Оформить билеты онлайн', completed: false }
        ]);
    }, []);

    const handleSeatSelect = (seat) => {
        if (!seat.available) {
            setMessage({
                type: 'error',
                title: 'Место занято',
                text: `Место ${seat.id} недоступно`
            });
            return;
        }

        const isSelected = selectedSeats.some(s => s.id === seat.id);

        if (isSelected) {
            setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
            setMessage({
                type: 'info',
                title: 'Удалено',
                text: `Место ${seat.id} удалено`
            });

            // Задача 5: удалить место
            if (selectedSeats.length === 1) {
                setTasks(prev =>
                    prev.map(task =>
                        task.id === 5 ? { ...task, completed: true } : task
                    )
                );
            }
        } else {
            if (selectedSeats.length < 6) {
                setSelectedSeats(prev => [...prev, seat]);
                setMessage({
                    type: 'success',
                    title: 'Добавлено',
                    text: `Место ${seat.id} добавлено`
                });

                // Задача 1 или 2
                if (!tasks.find(t => t.id === 1)?.completed) {
                    setTasks(prev =>
                        prev.map(task =>
                            task.id === 1 ? { ...task, completed: true } : task
                        )
                    );
                }
                if (!tasks.find(t => t.id === 2)?.completed && selectedSeats.length >= 1) {
                    setTasks(prev =>
                        prev.map(task =>
                            task.id === 2 ? { ...task, completed: true } : task
                        )
                    );
                }
            } else {
                setMessage({
                    type: 'warning',
                    title: 'Лимит превышен',
                    text: 'Максимум 6 мест'
                });
                setTasks(prev =>
                    prev.map(task =>
                        task.id === 9 ? { ...task, completed: true } : task
                    )
                );
            }
        }

        // Задача 3 (от 2 до 6 мест)
        if (selectedSeats.length + 1 >= 2 && selectedSeats.length + 1 <= 6) {
            setTasks(prev =>
                prev.map(task =>
                    task.id === 3 ? { ...task, completed: true } : task
                )
            );
        }

        setTimeout(() => setMessage(''), 3000);
    };

    const handleClearSelection = () => {
        setSelectedSeats([]);
        setMessage({
            type: 'info',
            title: 'Корзина очищена',
            text: 'Все места удалены'
        });
        setTasks(prev =>
            prev.map(task =>
                task.id === 6 ? { ...task, completed: true } : task
            )
        );
        setTimeout(() => setMessage(''), 3000);
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) return;

        const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
        const orderNumber = Math.floor(100000 + Math.random() * 900000);

        setMessage({
            type: 'success',
            title: '✅ Бронирование подтверждено',
            text: `Заказ №${orderNumber} | Сумма: ${(total + 350).toLocaleString('ru-RU')} руб.`
        });

        setTasks(prev =>
            prev.map(task => {
                if ([4, 7, 8, 10].includes(task.id)) {
                    return { ...task, completed: true };
                }
                return task;
            })
        );

        setTimeout(() => {
            setSelectedSeats([]);
            setMessage('');
        }, 5000);
    };

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <ConcertInfo selectedCount={selectedSeats.length} />

                <div className="booking-layout">
                    {/* Левая колонка: схема зала */}
                    <div className="seat-area">
                        <SeatMap
                            selectedSeats={selectedSeats}
                            onSeatSelect={handleSeatSelect}
                        />
                    </div>

                    {/* Правая колонка: корзина */}
                    <div className="cart-area">
                        <Cart
                            selectedSeats={selectedSeats}
                            onClearSelection={handleClearSelection}
                            onBooking={handleBooking}
                        />
                    </div>
                </div>

                {/* 📋 СПИСОК ЗАДАЧ — ВНИЗУ ПОД СХЕМОЙ ЗАЛА */}
                <div className="task-section">
                    <h3>🎯 Список задач по бронированию</h3>
                    <div className="task-grid">
                        {tasks.map(task => (
                            <div key={task.id} className="task-card">
                                <span className="task-title">{task.title}</span>
                                <span className={`task-badge ${task.completed ? 'done' : 'todo'}`}>
                                    {task.completed ? '✅ Выполнено' : '⏳ Не выполнено'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {message && (
                    <div className={`global-message message-${message.type}`}>
                        <strong>{message.title}</strong>
                        <p>{message.text}</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;