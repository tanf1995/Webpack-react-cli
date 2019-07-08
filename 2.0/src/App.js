import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './app.scss';
import small_pic from './assets/small.jpg';
import bigger_pic from './assets/bigger.jpg';
import Btn from './components/Btn';

function App(){
    return (
        <div className={styles.title}>
            hello react

            <img src={small_pic} alt="" />
            <img src={bigger_pic} alt="" />

            <Btn />
        </div>
    )
}

export default hot(App);
