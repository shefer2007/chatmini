import { Link } from "react-router-dom"
import styles from './styled.module.css';


const Comment = (props) => {
  return (
    <div className={styles.comm}>
        <label> Напишите коментарий </label>
        
        <input 
        value={props.inputValue} 
        onChange={(e)=>props.setInputValue(e.target.value)}
        />
        <button onClick={props.sendChat}
        > Отправить </button>

        <button onClick={()=> props.setChatData([])}> Удалить </button>

        {props.showDialogReg && (
        <div>
            Вы не авторизовались передите по <Link to="/"> Ссылке </Link>
        </div>
        
        )}
       
    </div>


  );
};

export default Comment