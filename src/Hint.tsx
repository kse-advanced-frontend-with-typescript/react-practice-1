import React, {useContext} from 'react';
import {Context} from './context';
import {SelectedCategory} from './CategoryState';


export const Hint: React.FC = () => {
    const ctx = useContext(Context);
    const categories = useContext(SelectedCategory);

    ctx.fn();
    return <p>
        <br/>
        <br/>
        <button onClick={() => categories.setData(['1', '2', '3'])}>Save</button>
        Hint: {ctx.hint} {categories.data}
    </p>;
};
