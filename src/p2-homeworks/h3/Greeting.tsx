import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setOnBlur: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setOnBlur} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div>
            <input value={name} onClick={setOnBlur} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorMessage}>{error}</span>
            <SuperButton red onClick={addUser}>+</SuperButton>
            <span className={s.count}>Количество пользователей: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
