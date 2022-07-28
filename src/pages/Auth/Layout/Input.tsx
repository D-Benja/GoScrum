import { ChangeEventHandler } from "react";

interface Props {
  inputId: string;
  label: string;
  handler: ChangeEventHandler<HTMLInputElement>;
  type: string;
  onBlurHandler?: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: Props) => {
  return (
    <>
      <div className="flex w-72 flex-col">
        <label className="text-sm">{props.label}</label>
        <input
          type={props.type}
          id={props.inputId}
          className="rounded-lg border p-1 outline-none"
          onChange={props.handler}
          onBlur={props.onBlurHandler}
        />
      </div>
    </>
  );
};

export default Input;
