import { Link } from 'react-router-dom';
import styles from './styled.module.css';



const Header = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      
      
      <nav className={styles.navbar}>

        
        <Link to='/'>Главная</Link>
        
        <Link to='/chat'> Чат</Link>
        
        <Link to='/test'>Подгрузка&nbsp;данных</Link>
        
      </nav>
    </div>
  )
}

export default Header;