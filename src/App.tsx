import React, {useEffect, useState} from 'react';
import {Search} from './Search';
import {Cat} from './Cat';

type CatResponse = Array<{
    id: string
    name: string
    image: {
        url: string
        id: string
    }
    life_span: string
    wikipedia_url: string
    adaptability: number
    alt_names: string
    description: string
    dog_friendly: string
    energy_level: string
    grooming: number
    health_issues: number
}>

export const App: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const [catsData, setCatsData] = React.useState<CatResponse>([]);
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

        fetch(link, options)
            .then(response => {
                return response.json() as Promise<CatResponse>;
            })
            .then(data => {
                setCatsData(data);
            });
    }, [ search ]);
    return (
        <>
            <Search onSearch={(asd) => {
                setSearch(asd);
            }} />
            <p>Searching for: {search}</p>
            <ul>
                {catsData.map(cat => {
                     return <Cat key={cat.name} name={cat.name} />;
                })}
            </ul>
        </>
    );
};

