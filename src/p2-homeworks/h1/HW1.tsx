import React from 'react'
import MessageR from "./MessageR";
import MessageL from "./MessageL";
import {inspect} from "util";
import styles from './HW1.module.css'


// const messageData = {
//   avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//   name: 'Some Name',
//   message: 'some text',
//   time: '22:00',
// }

function HW1() {
  return (
    <div>
      <hr/>
      homeworks 1
<div className={styles.container}>
      <MessageR
        name = "Roman" message= "Can you help me with CodeWars?" time = "17:30" avatar=""
      />
      <MessageL
        name = "Maks" message= "You can use google bro!" time = "21:20" avatar=""
      />
</div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr/>
    </div>
  )
}

export default HW1
