import React, { useState, useEffect } from 'react';
import Seat from './Seat';

function SeatMap({ selectedSeats, onSeatSelect }) {
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const initialSeats = [];
            const rows = 8;
            const seatsPerRow = 12;
            
            for (let row = 1; row <= rows; row++) {
                for (let num = 1; num <= seatsPerRow; num++) {
                    const rowLetter = String.fromCharCode(64 + row);
                    initialSeats.push({
                        id: `${rowLetter}${num}`,
                        row: row,
                        number: num,
                        price: row <= 2 ? 8500 : row <= 4 ? 6500 : 4500,
                        type: row <= 2 ? 'vip' : row <= 4 ? 'premium' : 'standard',
                        available: Math.random() > 0.25,
                    });
                }
            }
            
            setSeats(initialSeats);
            setLoading(false);
        }, 800);
    }, []);

    if (loading) {
        return <div className="loading">Загрузка схемы зала...</div>;
    }

    return (
        <div className="seat-map">
            <div className="stage">
                <div className="stage-overlay"></div>
                СЦЕНА
            </div>
            
            <div className="seats-container">
                {[...Array(8)].map((_, rowIndex) => {
                    const rowLetter = String.fromCharCode(65 + rowIndex);
                    const rowSeats = seats.filter(seat => seat.row === rowIndex + 1);
                    
                    return (
                        <div key={rowIndex} className="seat-row">
                            <div className="row-label">{rowLetter}</div>
                            <div className="seats-grid">
                                {rowSeats.map(seat => (
                                    <Seat
                                        key={seat.id}
                                        seat={seat}
                                        isSelected={selectedSeats.some(s => s.id === seat.id)}
                                        onSeatClick={onSeatSelect}
                                        rowLetter={rowLetter}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
                
                <div className="legend">
                    <div className="legend-item">
                        <div className="legend-color vip"></div>
                        <span>VIP (8 500 руб.)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color premium"></div>
                        <span>Премиум (6 500 руб.)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color standard"></div>
                        <span>Стандарт (4 500 руб.)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color selected"></div>
                        <span>Выбрано</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color unavailable"></div>
                        <span>Занято</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatMap;