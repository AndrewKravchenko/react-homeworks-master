import React from "react";
import s from "./Message.module.css";
import {MessageType} from './Message' 

export function AlternativeMessage(props: MessageType) {
    return (
      <div className={s.message}>
        <img className={s.aimg} src={props.avatar} />
        <div className={s.bubble}>
          <div className={s.bubbleLeft}>
            <p className={s.aperson}>{props.name}</p>
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

