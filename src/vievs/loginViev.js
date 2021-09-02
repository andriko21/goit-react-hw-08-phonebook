import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/auth-operations";

const styles = {
  form_login: {
    width: 400,
    display: "inline-flex",
    flexDirection: "column",
    padding: 10,
    border: "3px solid aqua",
    borderRadius: 20,
    backgroundColor: "rgb(164, 255, 255)",
  },
  login_label: {
    display: "inline-flex",
    flexDirection: "column",
    marginBottom: 20,
    fontWeight: 700,
    fontSize: 20,
  },
  login_input: {
    display: "inline-flex",
    width: 200,
    marginRight: 15,
    padding: "5px 15px",
    borderRadius: 13,
    backgroundColor: "rgb(255, 247, 236)",
  },
  login_button: {
    width: 190,
    padding: "5px 15px",
    borderRadius: 13,
    border: "2px solid rgb(247, 215, 171)",
    transitionDuration: "0.25s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "rgb(255, 247, 236)",
  },

};

const LoginViev = () => {
  //   state = {
  // email: '',
  // password: '',
  //   };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(state));
    setState({ email:"", password: ""});
  };

  return (
    <div>
      <h1>Сторінка логіну</h1>

      <form
          onSubmit={handleSubmit}
        autoComplete="off"
        style={styles.form_login}
      >
        <label style={styles.login_label}>
          Почта
          <input
            type="email"
            name="email"
              value={state.email}
            onChange={handleChange}
            style={styles.login_input}
          />
        </label>

        <label style={styles.login_label}>
          Пароль
          <input
            type="password"
            name="password"
            value={state.password}
            style={styles.login_input}
            onChange={handleChange}
          />
        </label>

        {state.name || state.email !== ''? <button type="submit" style={styles.login_button}>
          Увійти
        </button>: <button type="submit" style={styles.login_button} disabled>
          Увійти
        </button>}  
      </form>
        <h3>Увійдіть щоб отримати доступ до контактів</h3>

    </div>
  );
};

export default LoginViev;
