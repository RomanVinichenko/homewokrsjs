import React from 'react'
import styles from './MessageL.module.css'

type MessageLType = {
  avatar: string
  name: string
  message: string
  time: string
}

function MessageL(props: MessageLType) {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__avatar}>{props.avatar}</div>
      <div className={styles.messages__inner}>
        <h1 className={styles.messages__name}>{props.name}</h1>
        <div className={styles.messages__message}>{props.message}</div>
        <div className={styles.messages__time}>{props.time}</div>
      </div>
    </div>
  )
}

export default MessageL;
