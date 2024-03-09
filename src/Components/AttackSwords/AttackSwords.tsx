import AttackImg from '../../assets/attack.png';
import styles from './attackSwords.module.css';

interface Props {
    isAttacking: boolean
}

const AttackSwords = ({ isAttacking }: Props) => (
    <div className={isAttacking ? styles.swordsAttack : styles.swords}>
        <img src={AttackImg} alt="attack" width={200}/>
    </div>
);

export default AttackSwords;
