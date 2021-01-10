import {Actions, initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: initialPeopleType[], action: Actions): initialPeopleType[] => {
    switch (action.type) {
        case "sort": {
            const copyState = [...state]
            return copyState.sort((a, b) => {
                if (action.payload === "up" ? a.name <= b.name : a.name >= b.name) {
                    return -1
                } else {
                    return 1
                }
            })
        }
        case "check": {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
};