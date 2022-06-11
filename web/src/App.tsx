import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import DeployListPage from "./DeployListPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DeployListPage/>}/>
        </Routes>
    );
}

export default App;
