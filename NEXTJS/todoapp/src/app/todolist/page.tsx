import React from 'react';

interface Todo {
    task: string;
    completed: boolean;
}

async function name(): Promise<Todo[]> {
    const data = await fetch("http://localhost:8000");
    const data1 = await data.json();
    return data1;
}

const Todolist = async () => {
    const tododata = await name();
    console.log(tododata);
    return (
        <div>Todolist
            {
                tododata.map((todo: Todo, index: number) => {
                    return (
                        <div key={index}>
                            <p>{todo.task}</p>
                            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Todolist;
