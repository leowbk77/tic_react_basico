import {createContext, useState} from 'react';

// https://react.dev/reference/react/createContext
export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const {children} = props;
    const [tasks, setTasks] = useState([
        {id: 1, itemText: 'item1'},
        {id: 2, itemText: 'item2'},
        {id: 3, itemText: 'item3'},
    ]);
    const [creatorName, setCreatorName] = useState('leowbk77');

    const addTask = (taskName) => {
        setTasks(currentState => {
            const newTask = {
                id: currentState.length + 1,
                itemText: taskName,
            };
            return [...currentState, newTask];
        });
    };

    const removeTask = (taskId) => {
        setTasks(currentState => {              // somente as tasks com id nao correspondente
            const newState = currentState.filter(task => task.id !== taskId);
            return [...newState,];
        });
    };

    //atualiza a lista de tasks
    const updateTask = (taskId, newContent) => {
        setTasks(currentState => {
            currentState.forEach((task) => {
                if (task.id == taskId) {
                    task.itemText = newContent;
                }
            });
            return [...currentState,];
        });
    };

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
