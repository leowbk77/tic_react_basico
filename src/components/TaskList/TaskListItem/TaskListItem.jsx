import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { BTN_TYPE, FormSubmitBtn, FormTextField, LoadingIcon } from "../../../components";
import style from './TaskListItem.module.css';

const TaskListItem = (props) => {
    const {id, itemText} = props;
    const {removeTask, updateTask, isRemovingTask, isUpdatingTask} = useAppContext();
    const [editing, setEditing] = useState(false);
    const [newItemTextValue, setNewItemTextValue] = useState(itemText);

    const clicked = () => {
        setEditing(!editing);
    };

    const onChangeSetNewItemText = (event) => {
        setNewItemTextValue(event.currentTarget.value);
    };

    const leaveInput = (event) => {
        setEditing(!editing);
        updateTask(id, event.currentTarget.value);
    }

    // https://react.dev/learn/responding-to-events
    return (
        <li className={style.TaskListItem} onDoubleClick={clicked}>
            {
            editing ?                                                                   //fecha o input ao clicar de fora
                <FormTextField value={newItemTextValue} onChange={onChangeSetNewItemText} onBlur={leaveInput}/>
                : itemText
            }
            <FormSubmitBtn textBtn="-" typeBtn={BTN_TYPE.SECONDARY} onClick={() => removeTask(id)}/>
            {
                isRemovingTask && (<LoadingIcon />)
            }
            {
                isUpdatingTask && (<LoadingIcon />)
            }
        </li>
    );
};

export {TaskListItem};