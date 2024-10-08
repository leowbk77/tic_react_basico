import { BTN_TYPE, FormSubmitBtn } from "../../FormSubmitBtn";
import style from './TaskListItem.module.css';

const TaskListItem = (props) => {
    const {itemText} = props;
    return (
        <li className={style.TaskListItem}>
            {itemText}
            <FormSubmitBtn textBtn="-" typeBtn={BTN_TYPE.SECONDARY}/>
        </li>
    );
};

export {TaskListItem};