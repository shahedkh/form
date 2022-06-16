import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isValid , setIsValid] = useState(true)

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setIsValid(false)
      return
    }
    const enteredValue = nameInputRef.current.value;
    setIsValid(true)
  };
  const inputClasses = isValid ? 'form-control':'form-control invalid'
  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
        />
        {!isValid && <small className="error-text">Name must not be empty</small>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
