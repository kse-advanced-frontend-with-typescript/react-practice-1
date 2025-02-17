import React from 'react';

export const App: React.FC = () => {
    return (
        <>
            Hello
        </>
    );
};

const API_KEY = '';


const params = new URLSearchParams();
params.set('q', 'air');

const link = `https://api.thecatapi.com/v1/breeds/search?${params.toString()}`;

const options = {
    headers: new Headers({
        'x-api-key': API_KEY
    })
};

fetch(link, options).then(console.log);
