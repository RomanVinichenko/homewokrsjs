import React from 'react'
import styles from './MessageR.module.css'

type MessageRType = {
  avatar: string
  name: string
  message: string
  time: string
}

function MessageR(props: MessageRType) {
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

export default MessageR;
