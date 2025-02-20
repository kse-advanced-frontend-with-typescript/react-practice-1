import React from 'react';
import ReactDOM, {Container} from 'react-dom/client';
import {App} from './App';
import {Context} from './context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as Container
);

root.render(<App />);
