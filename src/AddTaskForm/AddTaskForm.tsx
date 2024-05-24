import React, {useState} from 'react';

interface Props {
  onSubmit: (taskText: string) => void;
}

const TaskForm: React.FC<Props> = () => {
  const [taskText,] = useState('');

  return (
    <form className="taskForm">
            <textarea
              value={taskText}
              placeholder="Add new task"
            />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;