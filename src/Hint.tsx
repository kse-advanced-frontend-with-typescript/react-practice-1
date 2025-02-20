import {useContext} from 'react';
import {Context} from './context';

export const Hint = () => {
    const ctx = useContext(Context);
    ctx.fn();
    return <p>
        <br />
        <br />
        Hint: {ctx.hint}
    </p>;
};
