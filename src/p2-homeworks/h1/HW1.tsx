import React from "react";
import { Message } from "./Message";
import { AlternativeMessage } from "./AlternativeMessage";
const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Masha",
  message: "Hello, Vasya!",
  time: "22:00",
};
const messageDataAlternative = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg",
  name: "Mark",
  message: "Ok! Say your price.",
  time: "07:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/* для личного творчества, могу проверить */}
      <AlternativeMessage
        avatar={messageDataAlternative.avatar}
        name={messageDataAlternative.name}
        message={messageDataAlternative.message}
        time={messageDataAlternative.time}
      />
      <hr />
    </div>
  );
}

export default HW1;
