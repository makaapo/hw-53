import React from 'react';

interface Props {
  id: string;
  text: string;
}

const Task: React.FC<Props> = ({id, text}) => {
  return (
    <div className="addedTask">
      <span>{text}</span>
      <button onClick={() => (id)}>Delete</button>
    </div>
  );
};

export default Task;