import Image from 'next/image';
import styles from './Background.module.css';

// IMAGES
import background from 'public/images/lunch_food.jpg';

// BACKGROUND IMAGE
const BackgroundComponent = () => {
    /* Render */
    return <Image src={background} alt="background" className={styles.background} />;
};

export default BackgroundComponent;
