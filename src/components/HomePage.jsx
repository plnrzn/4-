import SeatMap from '../components/SeatMap';
import TaskList from '../components/TaskList';

function HomePage() {
    return (
        <div>
            <h2>🎭 Выбор билетов</h2>
            <SeatMap />
            
            <h2>📋 Мои задачи</h2>
            <TaskList />
        </div>
    );
}

export default HomePage;