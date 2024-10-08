import style from './TaskList.module.css';
import { TaskListItem } from './TaskListItem/TaskListItem';

const TaskList = () => {
    const tarefas = [
        {id: 1, itemText: 'item1'},
        {id: 2, itemText: 'item2'},
        {id: 3, itemText: 'item3'},
    ];

    return (
        <ul className={style.TaskList}>
            {
                tarefas.map((tarefa) => <TaskListItem key={tarefa.id} itemText={tarefa.itemText}/>)
            }
        </ul>
    );
};

export {TaskList};