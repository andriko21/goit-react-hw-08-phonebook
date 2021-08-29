import { useDispatch, useSelector } from "react-redux";
import * as authOperations from '../../redux/auth/auth-operations'
import styles from './UserMenu.module.css'


const UserMenu = () => {
    const dispath = useDispatch();
  const name = useSelector(state => state.auth.user.name)

    return (
         <div className={styles.box}>
        <span className={styles.user_name}>Welcome,  {name}</span>
        <button type="button" onClick={()=>dispath(authOperations.logOut)} className={styles.user_button}>
          Вийти
        </button>
      </div>
        )
}
export default UserMenu;