import style from './Home.module.css';
import { CreateTaskForm } from '../../components';
import { TaskList } from '../../components';

const Home = () => {
    return (
        <div className={style.Home}>
            <CreateTaskForm />
            <TaskList />
        </div>
    );
};

export {Home};