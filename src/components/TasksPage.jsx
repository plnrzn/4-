import TaskList from '../components/TaskList';

function TasksPage() {
    return (
        <div className="page tasks-page">
            <div className="page-header">
                <h2>📝 Управление задачами</h2>
                <p className="page-description">
                    Данные загружаются с сервера JSONPlaceholder
                </p>
            </div>
            <TaskList />
            <div className="api-info">
                <h3>Информация об API</h3>
                <p><strong>Endpoint:</strong> https://jsonplaceholder.typicode.com/todos</p>
                <p><strong>Метод:</strong> GET</p>
                <p><strong>Лимит:</strong> 10 задач</p>
                <p><strong>Используемые поля:</strong> id, title, completed</p>
            </div>
        </div>
    );
}

export default TasksPage;