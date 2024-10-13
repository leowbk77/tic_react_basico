import { TaskListItem } from './TaskListItem/TaskListItem';
import { useAppContext } from '../../hooks';
import style from './TaskList.module.css';

const TaskList = () => {
    const {tasks} = useAppContext();
    
    // https://react.dev/learn/rendering-lists
    return (
        <ul className={style.TaskList}>
            {
                !tasks.length && (<p>No tasks added!</p>)
            }
            {
                tasks.map((task) => <TaskListItem key={task.id} id={task.id} itemText={task.itemText} />)
            }
        </ul>
    );
};

export {TaskList};