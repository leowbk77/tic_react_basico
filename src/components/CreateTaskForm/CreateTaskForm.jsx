import { useState } from "react";
import { FormTextField, FormSubmitBtn, LoadingIcon } from "../../components";
import { useAppContext } from "../../hooks";
import style from "./CreateTaskForm.module.css";

const CreateTaskForm = () => {
    const {addTask, isAddingTask} = useAppContext();
    const [taskName, setTaskName] = useState('');

    const onChangeSetTaskName = (event) => {
        setTaskName(event.currentTarget.value);
    }

    const submitNewTask = (event) => {
        event.preventDefault();
        if(!taskName) {
            return;
        }
        addTask(taskName);
        setTaskName('');
    };

    return (
        <form className={style.CreateTaskForm} onSubmit={submitNewTask}>
            <FormTextField value={taskName} onChange={onChangeSetTaskName}/>
            <FormSubmitBtn textBtn="+" />
            {isAddingTask && <LoadingIcon />}
        </form>
    );
};

export {CreateTaskForm};