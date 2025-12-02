/* 
Form with fields
FirstName
LastName
Phone
Emails
Password
Gender
Textarea bio
Skills
Read terms and conditions
*/

import React, { useReducer } from "react";

type TFormType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  gender: "male" | "female" | "";
  skill: string;
  bio: "";
  tnc: boolean;
};

type TFormAction = {
  field?: string;
  type: "UPDATE_FIELD" | "RESET";
  value?: string | boolean;
};

const initialState: TFormType = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  gender: "",
  phone: "",
  skill: "react",
  bio: "",
  tnc: false,
};

function reducer(state: TFormType, action: TFormAction) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      return { ...state, [action.field ?? ""]: action.value };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
}

const ReactForms = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event?.preventDefault();
    dispatch({
      field: event.target.name ?? "",
      value: event.target.value ?? "",
      type: "UPDATE_FIELD",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log(state);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <div className="name-container">
        <div className="field-container">
          <label htmlFor="firstname">Firstname</label>
          <input
            value={state?.firstname ?? ""}
            className="textfield"
            type="text"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="field-container">
          <label htmlFor="lastname">Lastname</label>
          <input
            value={state?.lastname ?? ""}
            className="textfield"
            type="text"
            name="lastname"
            autoComplete="on"
            id="lastname"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field-container">
        <label htmlFor="phone">Phone</label>
        <input
          value={state?.phone}
          className="textfield"
          type="phone"
          id="phone"
          autoComplete="on"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div className="field-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={state?.email ?? ""}
          className="textfield"
          type="email"
          name="email"
          autoComplete="on"
          onChange={handleChange}
        />
      </div>
      <div className="field-container">
        <label htmlFor="password">Password</label>
        <input
          className="textfield"
          value={state?.password ?? ""}
          type="password"
          autoComplete="on"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="gender-container">
        <div className="radio-container">
          <input
            type="radio"
            name="gender"
            id="male-radio-input"
            autoComplete="on"
            value={"male"}
            onChange={handleChange}
            checked={state?.gender === "male"}
          />
          <label htmlFor="male-radio-input">Male</label>
        </div>
        <div className="radio-container">
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            id="female-radio-input"
            value={"female"}
            autoComplete="on"
            checked={state?.gender === "female"}
          />
          <label htmlFor="female-radio-input">Female</label>
        </div>
      </div>
      <div className="field-container">
        <label htmlFor="bio">Write a good bio</label>
        <textarea
          onChange={handleChange}
          name="bio"
          className="textarea"
          value={state?.bio ?? ""}
          autoComplete="on"
          id="bio"
        />
      </div>
      <div className="field-container">
        <label htmlFor="skill">Select your skill</label>
        <select
          onChange={handleChange}
          name="skill"
          value={state?.skill ?? ""}
          className="selectfield"
          id="skill"
        >
          <option value={"react"}>React</option>
          <option value={"angular"}>Angular</option>
          <option value={"vue"}>Vue</option>
        </select>
      </div>
      <div className="tnc-container">
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "tnc",
              value: e?.target?.checked ?? false,
            })
          }
          name="tnc"
          id="tnc"
          checked={state?.tnc ?? false}
          className="checkbox"
        ></input>
        <p>I have read terms and condition</p>
      </div>
      <button type="submit">Submit Form</button>
      <button type="reset" onClick={handleReset}>
        Reset Form
      </button>
    </form>
  );
};

export default ReactForms;
