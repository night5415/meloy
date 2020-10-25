import React, { ChangeEvent } from "react";

interface Props {
  version?: number;
  labelFor: string;
  val?: string;
  onValChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StateHooksComponent: React.FC<Props> = ({
  version,
  labelFor,
  val,
  onValChange,
}) => {
  version = 1;

  return (
    <div>
      <label htmlFor={labelFor}>
        {labelFor.replace("_", " ").toUpperCase()}
      </label>
      <br />
      <input
        type="text"
        placeholder={labelFor.replace("_", " ")}
        name={labelFor}
        value={val}
        onChange={onValChange}
      />
    </div>
  );
};

export default StateHooksComponent;
