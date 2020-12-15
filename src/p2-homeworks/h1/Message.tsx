import React from "react";
import s from "./Message.module.css";

export type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};
export function Message(props: MessageType) {
  return (
    <div className={s.message}>
      <img className={s.img} src={props.avatar} />
      <div className={s.bubble}>
        <div className={s.bubbleLeft}>
          <p className={s.person}>{props.name}</p>
          <div>
            <p>
              {props.message}
              <span className={s.time}>{props.time}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


