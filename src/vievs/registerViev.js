import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

const styles = {
  form: {
    width: 400,
    display: "inline-flex",
    flexDirection: "column",
    padding: 10,
    border: "3px solid aqua",
    borderRadius: 20,
    backgroundColor: "rgb(164, 255, 255)",
  },
  register_label: {
    display: "inline-flex",
    flexDirection: "column",
    marginBottom: 20,
    fontWeight: 700,
    fontSize: 20,
  },
  register_input: {
    display: "inline-flex",
    width: 200,
    marginRight: 15,
    padding: "5px 15px",
    borderRadius: 13,
    backgroundColor: "rgb(255, 247, 236)",
  },
  register_button: {
    width: 190,
    padding: "5px 15px",
    borderRadius: 13,
    border: "2px solid rgb(247, 215, 171)",
    transitionDuration: "0.25s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "rgb(255, 247, 236)",
  },
};

const RegisterViev = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state);
    dispatch(register(state));
    // props.onRegister(state),

    setState({ name: "", email: "", password: "" });
  };
  return (
    <>
      <div>
        <h1>Сторінка реєстарції</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.register_label}>
            Ім'я
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              style={styles.register_input}
            />
          </label>

          <label style={styles.register_label}>
            Почта
            <input
              type="email"
              name="email"
              value={state.email}
              style={styles.register_input}
              onChange={handleChange}
            />
          </label>

          <label style={styles.register_label}>
            Пароль
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              style={styles.register_input}
            />
          </label>

          {state.name || state.email || state.password !== ''? <button type="submit" style={styles.register_button}>
          Зареєструватися
        </button>: <button type="submit" style={styles.register_button} disabled>
          Зареєструватися
        </button>}
        </form>
      </div>
    </>
  );
};

export default RegisterViev;
