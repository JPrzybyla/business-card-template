import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppMobile from "./AppMobile";



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    ReactDOM.render(
        <React.StrictMode>
            <AppMobile />
        </React.StrictMode>,
        document.getElementById('root')
    );
}else{
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}