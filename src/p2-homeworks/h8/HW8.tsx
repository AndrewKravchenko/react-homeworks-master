import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type initialPeopleType = {
    _id: number
    name: string
    age: number
}
type sort = { type: "sort"; payload: "up" | "down"}
type check = { type: "check"; payload: number}

export type Actions = sort | check;

let initialPeople: initialPeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]
function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {/*some name, age*/}
          <span>{p.name}, </span>
          <span>{p.age}</span>
        </div>
    ))
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))
    return (

        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <SuperButton red onClick={sortUp}>sort up</SuperButton>
            <SuperButton red onClick={sortDown}>sort down</SuperButton>
            <SuperButton red onClick={checkAge}>check 18+</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
