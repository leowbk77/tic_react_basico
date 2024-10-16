import {createContext, useEffect, useState} from 'react';
import {api} from '../services';

// https://react.dev/reference/react/createContext
export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const {children} = props;
    const [tasks, setTasks] = useState([]);
    const [creatorName, setCreatorName] = useState('leowbk77');

    const loadTasks = async () => {
        const {data = []} = await api.get('/tasks');
        setTasks([...data,]);
    };

    const addTask = async (taskName) => {
        const {data: newTask} = await api.post('/tasks', {id: null, nome: taskName,});
        console.log(newTask);
        setTasks(currentState => {
            return [...currentState, newTask,];
        })
    };

    const removeTask = async (taskId) => {
        const {data: deletedTask} = await api.delete(`/tasks/${taskId}`);
        console.log(deletedTask);

        setTasks(currentState => {              // somente as tasks com id nao correspondente
            const newState = currentState.filter(task => task.id !== taskId);
            return [...newState,];
        });
    };

    //atualiza a lista de tasks
    const updateTask = async (taskId, newContent) => {
        const {data: updatedTask} = await api.put('/tasks', {id: taskId, nome: newContent});
        console.log(updatedTask);

        setTasks(currentState => {
            currentState.forEach((task) => {
                if (task.id == taskId) {
                    task.nome = updatedTask.nome;
                }
            });
            return [...currentState,];
        });
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <AppContext.Provider 
        value={{creatorName, 
                tasks,
                addTask,
                removeTask,
                updateTask}}>
            {children}
        </AppContext.Provider>
    );
};
