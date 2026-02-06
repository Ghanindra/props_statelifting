import React, { useReducer } from "react";

/* ---------- Initial State ---------- */
const initialState = {
  name: "",
  email: "",
  password: "",
  isLoading: false,
  error: ""
};

/* ---------- Reducer ---------- */
function formReducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        [action.field]: action.value
      };

    case "SUBMIT_START":
      return {
        ...state,
        isLoading: true,
        error: ""
      };

    case "SUBMIT_SUCCESS":
      return initialState;

    case "SUBMIT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

/* ---------- Component ---------- */
export default function LoginForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      type: "FIELD_CHANGE",
      field: e.target.name,
      value: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "SUBMIT_START" });

    // Fake API call
    setTimeout(() => {
      if (state.email === "test@gmail.com" && state.password === "123456") {
        dispatch({ type: "SUBMIT_SUCCESS" });
        alert("Login Successful");
      } else {
        dispatch({
          type: "SUBMIT_ERROR",
          payload: "Invalid email or password"
        });
      }
    }, 1000);
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit" disabled={state.isLoading}>
          {state.isLoading ? "Loading..." : "Login"}
        </button>

        {state.error && (
          <p style={{ color: "red" }}>{state.error}</p>
        )}
      </form>
    </div>
  );
}
