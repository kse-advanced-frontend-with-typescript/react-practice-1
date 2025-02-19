import React, {useEffect, useState} from 'react';
import {Search} from './Search';

export const App: React.FC = () => {
    const [search, setSearch] = React.useState('');

    useEffect(() => {
        if (!search) return;

        const API_KEY = process.env.API_KEY ?? '';

        const params = new URLSearchParams();
        params.set('q', search);

        const link = `https://api.thecatapi.com/v1/breeds/search?${params.toString()}`;

        const options = {
            headers: new Headers({
                'x-api-key': API_KEY
            })
        };

        fetch(link, options).then(console.log);
    }, [ search ]);
    return (
        <>
            <Search onSearch={(asd) => {
                setSearch(asd);
            }} />
            <p>Searching for: {search}</p>
        </>
    );
};

