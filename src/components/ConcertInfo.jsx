import React from 'react';

function ConcertInfo({ selectedCount }) {
   
    const concert = {
        title: "Симфонический оркестр",
        artist: "Главный дирижёр: Михаил Петров",
        description: "Вечер классической музыки. В программе произведения великих композиторов.",
        duration: "2 часа 15 минут"
    };

    return (
        <div className="concert-info">
            <div className="concert-header">
                <div className="concert-title-section">
                    <h2 className="concert-title">{concert.title}</h2>
                    <p className="concert-artist">{concert.artist}</p>
                    <p className="concert-description">{concert.description}</p>
                </div>
                <div className="concert-duration">{concert.duration}</div>
            </div>
            
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-label">Дата</div>
                    <div className="stat-value">15 декабря 2024</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Время</div>
                    <div className="stat-value">19:00</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Зал</div>
                    <div className="stat-value">№1</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Выбрано</div>
                    <div className="stat-value highlight">{selectedCount} / 6 мест</div>
                </div>
            </div>
        </div>
    );
}

export default ConcertInfo;