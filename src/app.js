import React from 'react';
import {hot} from 'react-hot-loader/root';
import './style/reset.css';
import styles from './app.scss';
import pic from './assets/images/tuzi.jpg';
import HomePage from './views/HomePage';


function App(){
    return (
        <div className={styles.appL}>
            <HomePage />
            <div>
                {styles.appL}
            </div>

            <div>
                <img src={pic} alt="" />
            </div>
        </div>
    )
}

export default hot(App);