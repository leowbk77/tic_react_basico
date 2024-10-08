import { FormTextField } from "../../components";
import { FormSubmitBtn } from "../../components";
import style from "./CreateTaskForm.module.css";

const CreateTaskForm = () => {
    return (
        <form className={style.CreateTaskForm}>
            <FormTextField />
            <FormSubmitBtn textBtn="+" />
        </form>
    );
};

export {CreateTaskForm};