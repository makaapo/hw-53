import './App.css';
import React, {useState} from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

interface Task {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: 'j1', text: 'Доброе утро!' },
    { id: 'j2', text: 'Хорошего дня!' },]);
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      text: taskText,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (
    <div>
      <AddTaskForm onSubmit={addTask} />
      {tasks.length > 0 && (
        <div className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} id={task.id} text={task.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;