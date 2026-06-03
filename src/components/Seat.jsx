import React from 'react';

function Seat({ seat, isSelected, onSeatClick, rowLetter }) {
    const getSeatTypeClass = () => {
        if (!seat.available) return 'seat-unavailable';
        if (isSelected) return 'seat-selected';
        return `seat-${seat.type}`;
    };

    return (
        <button
            className={`seat ${getSeatTypeClass()}`}
            onClick={() => onSeatClick(seat)}
            disabled={!seat.available}
            title={`Ряд ${rowLetter}, место ${seat.number}\nЦена: ${seat.price.toLocaleString('ru-RU')} руб.`}
        >
            {seat.number}
        </button>
    );
}

export default Seat;