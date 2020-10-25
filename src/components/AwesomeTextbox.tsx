import React, { ChangeEvent } from "react";

interface Props {
  required?: boolean;
  labelFor: string;
  val?: string;
  onValChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AwesomeTextbox: React.FC<Props> = ({
  labelFor,
  val,
  onValChange,
  required = false,
}) => {
  const ph = required ? "Required..." : "";
  return (
    <div>
      <label htmlFor={labelFor}>{labelFor.replace("_", " ")}</label>
      <br />
      <input type="text" placeholder={ph} name={labelFor} value={val} onChange={onValChange} />
    </div>
  );
};

export default AwesomeTextbox;
