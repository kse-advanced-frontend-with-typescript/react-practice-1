import React from 'react';
import {Search} from './Search';

export const App: React.FC = () => {

    return (
        <>
            <Search onSearch={(value) => {
                alert(value);
            }} />
        </>
    );
};

const API_KEY = process.env.API_KEY ?? '';

const params = new URLSearchParams();
params.set('q', 'air');

const link = `https://api.thecatapi.com/v1/breeds/search?${params.toString()}`;

const options = {
    headers: new Headers({
        'x-api-key': API_KEY
    })
};

fetch(link, options).then(console.log);
