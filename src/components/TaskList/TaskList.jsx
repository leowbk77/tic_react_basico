import { TaskListItem } from './TaskListItem/TaskListItem';
import { useAppContext } from '../../hooks';
import { LoadingIcon } from '../../components';
import style from './TaskList.module.css';

const TaskList = () => {
    const {tasks, isLoadingTasks} = useAppContext();
    
    // https://react.dev/learn/rendering-lists
    return (
        <ul className={style.TaskList}>
            {
                isLoadingTasks && (<p>Carregando tarefas... <LoadingIcon /></p>)
            }
            {
                !isLoadingTasks && !tasks.length && (<p>No tasks added!</p>)
            }
            {
                tasks.map((task) => <TaskListItem key={task.id} id={task.id} itemText={task.nome} />)
            }
        </ul>
    );
};

export {TaskList};