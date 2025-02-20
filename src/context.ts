import {createContext, useState} from 'react';

type Context = {
    hint: string
    fn: () => void
}

export const Context = createContext<Context>({
    hint: '',
    fn: () => {
        alert('Hello from the context');
    }

});
