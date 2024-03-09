import LoadingImage from '../../assets/loading.svg';
import styles from './loading.module.css';

const Loading = () => {
    return <div className={styles.container} >
        <img src={LoadingImage} alt="loading" />
    </div>
}

export default Loading;
