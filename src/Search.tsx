import React, {useRef} from 'react';

type SearchProps = {
    onSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps>  = ({ onSearch }) => {
    const input = useRef<HTMLInputElement>(null);
    const onSubmit: React.FormEventHandler = (event) => {
        event.preventDefault();

        onSearch(input?.current?.value ?? '');
    };


    return <form onSubmit={onSubmit}>
        <input ref={input} type="text"/>
        <button type='submit'>Search</button>
    </form>;
};
