function AboutPage() {
    return (
        <div className="page about-page">
            <div className="page-header">
                <h2>ℹ️ О приложении</h2>
                <p className="page-description">
                    Практическая работа №3 - "Работа с данными и маршрутизация"
                </p>
            </div>
            
            <div className="about-content">
                <section className="info-section">
                    <h3>📌 Общая информация</h3>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Дисциплина:</span>
                            <span className="info-value">Верстка и создание приложений</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Институт:</span>
                            <span className="info-value">ИПТИП</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Кафедра:</span>
                            <span className="info-value">Компьютерного дизайна</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Преподаватель:</span>
                            <span className="info-value">Пьянкова Марина Анатольевна</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Семестр:</span>
                            <span className="info-value">4 семестр, 2025-26 уч.год</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Объем:</span>
                            <span className="info-value">8 часов</span>
                        </div>
                    </div>
                </section>

                <section className="tech-section">
                    <h3>🛠 Используемые технологии</h3>
                    <div className="tech-list">
                        <span className="tech-tag">React 18</span>
                        <span className="tech-tag">React Router v6</span>
                        <span className="tech-tag">Fetch API</span>
                        <span className="tech-tag">Hooks (useState, useEffect)</span>
                        <span className="tech-tag">JSONPlaceholder API</span>
                    </div>
                </section>

                <section className="features-section">
                    <h3>✅ Реализованные возможности</h3>
                    <ul className="features-list">
                        <li>Загрузка данных с открытого API</li>
                        <li>Маршрутизация SPA без перезагрузки страницы</li>
                        <li>Обработка состояний загрузки и ошибок</li>
                        <li>Адаптивная верстка</li>
                        <li>Отображение списка задач с индикацией статуса</li>
                        <li>Навигация между страницами</li>
                    </ul>
                </section>

                <section className="api-section">
                    <h3>📡 Структура данных API</h3>
                    <div className="api-table">
                        <div className="api-row header">
                            <div className="api-cell">Поле</div>
                            <div className="api-cell">Тип</div>
                            <div className="api-cell">Назначение</div>
                        </div>
                        <div className="api-row">
                            <div className="api-cell">id</div>
                            <div className="api-cell">number</div>
                            <div className="api-cell">Уникальный идентификатор задачи</div>
                        </div>
                        <div className="api-row">
                            <div className="api-cell">title</div>
                            <div className="api-cell">string</div>
                            <div className="api-cell">Текст задачи</div>
                        </div>
                        <div className="api-row">
                            <div className="api-cell">completed</div>
                            <div className="api-cell">boolean</div>
                            <div className="api-cell">Статус выполнения задачи</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;