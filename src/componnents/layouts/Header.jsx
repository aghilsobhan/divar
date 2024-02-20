import { Link } from "react-router-dom";
import styles from "./Header.module.css"
function Header(props) {
    return (
    <header className={styles.header}>
        <div>
            <Link to="/">
                <img className={styles.logo} src="divar.svg" alt="divar" />
            </Link>
            <span>
                <img src="location.svg" alt="" />
                <p>تهران</p>
            </span>
        </div>
        <div>
            <Link to='/auth'>
                <span>
                    <img src="profile.svg" alt="profile" />
                    <p>دیوار من</p>
                </span>
            </Link>
            <Link to="/dashboard" className={styles.button}>ثبت آگهی</Link>
        </div>
    </header>
    );
}

export default Header;