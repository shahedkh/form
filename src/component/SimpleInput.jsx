import { useState   } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = enteredName.trim() !== ""
  const inputIsValid = !isValid && touched;
  const inputClasses = inputIsValid ? "form-control invalid" : "form-control ";



  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);

  };

const inputBlurHandler =(e)=>{
setTouched(true)

if (enteredName.trim() === "") {
}
}

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    setTouched(false)
    setTouched(true);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {inputIsValid && (
          <small className="error-text">Name must not be empty</small>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
