import React from "react";
import s from "./Error404.module.css";

function Error404() {
    return (
        <div className={s.body} >
            <h1 className={s.h}>Nice Try, Kid.</h1>
            <a className={s.message}>Page not found!</a>
            <a className={s.error404}>404</a>
        </div>

    );
}

export default Error404;
