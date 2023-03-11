import React from 'react';
import Json from "./Userdata.json"
import Cricket from "./Cricket"
import global from "./global.css"

const App = () => {
    return (
        <div>
    <Cricket data={Json}/>
        </div>
    );
}

export default App;
