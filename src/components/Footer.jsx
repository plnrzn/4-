import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    const developer = "Рязанцева Полина"; 
    const group = "ТКБО-04-24"; 
    return (
        <footer className="footer">
            <p>© {currentYear} Список задач</p>
            <p>Разработчик: {developer} | Группа: {group}</p>
            <p>Практическая работа №1 по дисциплине "Верстка и создание приложений"</p>
        </footer>
    );
}

export default Footer;