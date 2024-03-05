import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header/header";
import 'bootstrap/dist/css/bootstrap.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
import Home from "./components/screens/home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Home/>
    </React.StrictMode>
);


