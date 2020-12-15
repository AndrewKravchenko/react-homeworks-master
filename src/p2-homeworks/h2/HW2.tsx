import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./Affairs.module.css";


// types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
    _id: number;
    name: string;
    priority: string;
  }; 
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs:  Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "low") return affairs.filter(affairs => affairs.priority === "low" );
    if (filter === "high") return affairs.filter(affairs => affairs.priority === "high" );
    if (filter === "middle") return affairs.filter(affairs => affairs.priority === "middle" );
    else return affairs; // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id); // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any
 
    return (
        <div >
            {/* <hr/> */}
            <div className={s.title}>
            homeworks 2
            </div>
            {/*should work (должно работать)*/}
            <div className={s.body}>
            <Affairs 
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/* <hr/> */}
        </div>
    );
}

export default HW2;