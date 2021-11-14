import styles from './Navbar.module.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.left_nav}>
                    <ul>
                        <WorkOutlineIcon style={{color: "white"}} />
                        <li><a href="#" className={styles.title}>JobHunt</a></li>
                        <li><a href="#">Find Jobs</a></li>
                        <li><a href="#">Upskill Yourself</a></li>
                    </ul>
                </div>
                <div className={styles.right_nav}>
                    <ul>
                        <li><a href="#">Post a Job</a></li>
                        <li><a href="#">Sign in</a></li>
                    </ul>
                </div>
            </nav>

            <h1 className={styles.tag_line}>Find Your Dream Job</h1>
            <p className={styles.tag_line_p}>Browse through thousands of full-time or part-time jobs near you</p>
        </div>
    )
}