import React from "react";

interface Props {
  text: string;
  onUserClick: (e: React.MouseEvent) => void;
}

const AwesomeButton: React.FC<Props> = ({ text, onUserClick }) => {
  return <input type="button" value={text} onClick={onUserClick} />;
};

export default AwesomeButton;
