import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
        // ... is basically taking the entire state object
        // that currently exists and is working on top of it
         return {...state, isSignedIn: true, userId: action.payload};

        case SIGN_OUT:
        return {...state, isSignedIn: false, userId: null};

        default: 
        return state;
    }
}