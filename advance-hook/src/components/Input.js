import { forwardRef } from "react";

const Input = (props, ref) => {
  let { type, label, name } = props;
  return (
    <>
      <div className="mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          ref={ref}
          placeholder={label}
          type={type}
          className="form-control"
          name={name}
          id={name}
        />
      </div>
    </>
  );
};

export default forwardRef(Input);
