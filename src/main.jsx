import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found!");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter basename="/intranetdemoFront"> {/* Set basename here */}
            <App />
        </BrowserRouter>
    </StrictMode>,
);
