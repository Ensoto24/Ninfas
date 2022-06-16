import styles from "../styles/footer.module.css";
import Image from "next/image";
import Maps from "../components/Maps"


const footer = () => {
    return (
        <div className={styles.footerMain}>
           <div className={styles.footerContact}>
                <h2>The Original Mexican Restaurant</h2>
                <p>5730 Hwy 6<br/>Missouri City, TX 77459<br/>Tel: 281-499-5070</p>
           </div>
           <div className={styles.footerMap}>
                <Maps />
           </div>
        </div>
    );
}

export default footer;
