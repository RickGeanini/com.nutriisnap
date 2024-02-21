import Image from 'next/image';
import styles from './Background.module.css';

// IMAGES
import background from 'public/images/background.jpg';

// BACKGROUND IMAGE
const BackgroundComponent = () => {
    /* Render */
    return <Image src={background} alt="background" className={styles.background} loading="lazy" />;
};

export default BackgroundComponent;
