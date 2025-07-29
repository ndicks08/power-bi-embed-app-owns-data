//imports needed
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// render react app
const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
            <App />
    </StrictMode>
);