import React, { useState } from 'react';

function Cart({ selectedSeats, onClearSelection, onBooking }) {
    const [message, setMessage] = useState(null);
    const serviceFee = 350;

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            setMessage({
                type: 'error',
                title: 'Нет выбранных мест',
                text: 'Для бронирования необходимо выбрать хотя бы одно место'
            });
            return;
        }

        onBooking();
        
        setMessage({
            type: 'success',
            title: 'Бронирование подтверждено',
            text: `Заказ №${Math.floor(100000 + Math.random() * 900000)} оформлен`
        });

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

    return (
        <div className="cart">
            <div className="cart-header">
                <h3>Ваш заказ</h3>
                {selectedSeats.length > 0 && (
                    <span className="cart-badge">{selectedSeats.length} мест</span>
                )}
            </div>

            {selectedSeats.length === 0 ? (
                <div className="cart-empty">
                    <p>Выберите места на схеме</p>
                    <small>Нажмите на доступные места для добавления в заказ</small>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {selectedSeats.map(seat => (
                            <div key={seat.id} className="cart-item">
                                <div>
                                    <div className="cart-item-title">Место {seat.id}</div>
                                    <div className={`cart-item-type ${seat.type}`}>
                                        {seat.type === 'vip' ? 'VIP' : 
                                         seat.type === 'premium' ? 'Премиум' : 'Стандарт'}
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    {seat.price.toLocaleString('ru-RU')} руб.
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <div className="total-row">
                            <span>Стоимость мест:</span>
                            <span>{totalPrice.toLocaleString('ru-RU')} руб.</span>
                        </div>
                        <div className="total-row">
                            <span>Сервисный сбор:</span>
                            <span>{serviceFee} руб.</span>
                        </div>
                        <div className="total-row final">
                            <span>Итого к оплате:</span>
                            <span>{(totalPrice + serviceFee).toLocaleString('ru-RU')} руб.</span>
                        </div>
                    </div>
                </>
            )}

            <div className="cart-actions">
                {selectedSeats.length > 0 && (
                    <button 
                        className="btn-secondary"
                        onClick={onClearSelection}
                    >
                        Очистить
                    </button>
                )}
                <button 
                    className="btn-primary"
                    onClick={handleBooking}
                    disabled={selectedSeats.length === 0}
                >
                    {selectedSeats.length === 0 ? 'Выбрать места' : 'Подтвердить бронирование'}
                </button>
            </div>

            {message && (
                <div className={`message message-${message.type}`}>
                    <div className="message-title">{message.title}</div>
                    <div>{message.text}</div>
                </div>
            )}

            <div className="cart-info">
                <p>• Возврат билетов возможен за 72 часа</p>
                <p>• Максимум: 6 мест в одном заказе</p>
                <p>• Электронные билеты отправляются на email</p>
            </div>
        </div>
    );
}

export default Cart;