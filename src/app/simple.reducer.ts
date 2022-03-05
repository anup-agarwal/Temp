import { Action } from "@ngrx/store";

export function simpleReducer(state: string = "Hello World!!!", action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH':
            return state = 'This is Spanish';

        case 'FRENCH':
            return state = 'This is French'
       
        default:
            return state = 'This is Default'
    }
}