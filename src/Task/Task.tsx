import React from 'react';

interface Props {
  id: string;
  text: string;
  onDeleteTask: (id: string) => void;
}

const Task: React.FC<Props> = ({id, text, onDeleteTask}) => {
  return (
    <div className="addedTask">
      <span>{text}</span>
      <button onClick={() => onDeleteTask(id)}>Delete</button>
    </div>
  );
};

export default Task;