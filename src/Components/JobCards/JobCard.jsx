import styles from './JobCard.module.css';
import Button from '@mui/material/Button';


export const JobCard = ({ image, description, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={image} alt="" />
                <div className={styles.rightBox}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.moreDetailsBtn}>
                        <Button variant="outlined" size="small" color="secondary">View Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}