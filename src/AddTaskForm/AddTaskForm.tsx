import React, {ChangeEvent, FormEvent, useState} from 'react';

interface Props {
  onSubmit: (taskText: string) => void;
}

const TaskForm: React.FC<Props> = ({onSubmit}) => {
  const [taskText, setTaskText] = useState('');

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTaskText(event.target.value);
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(taskText);
    setTaskText('');
  };

  return (
    <form className="taskForm" onSubmit={onFormSubmit}>
            <textarea
              value={taskText}
              onChange={onFieldChange}
              placeholder="Add new task"
              required
            />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;