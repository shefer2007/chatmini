import styles from './styled.module.css';

const ChatBlock = (props) => {
  return (
    console.log(props.chatData),
    <div className={styles.chatBlock}>
      {props.chatData.map((el, i) => {
        return (
          <div key={i}>
            {props.chatData.length - i}. {el}

          </div>
        )
      })}
    </div>
  )
}

export default ChatBlock