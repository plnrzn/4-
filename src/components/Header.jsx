import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-main">
                <div className="header-title">
                    <div className="header-icon">🎫</div>
                    <div>
                        <h1>Бронирование билетов</h1>
                        <div className="header-subtitle">Онлайн-система выбора мест</div>
                    </div>
                </div>
                <div className="header-info">
                    <div className="header-info-item">
                        <span className="header-info-dot"></span>
                        <span>Сеанс №{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="header-info-item">
                        <span className="header-info-dot"></span>
                        <span>Версия: 1.0.0</span>
                    </div>
                </div>
            </div>
            
            <div className="header-footer">
                <div className="badge-group">
                    <span className="badge badge-venue">Главный концертный зал</span>
                    <span className="badge badge-hall">Зал №1</span>
                    <span className="badge badge-capacity">Вместимость: 96 мест</span>
                </div>
                <span className="badge badge-time">Начало в 19:00</span>
            </div>
        </header>
    );
}

export default Header;