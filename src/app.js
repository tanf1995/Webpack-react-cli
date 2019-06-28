import React from 'react';
import './style/reset.css';
import styles from './app.scss';
import pic from './assets/images/tuzi.jpg';


function App(){
    return (
        <div className={styles.appL}>
            <h1 className="title">Home Page</h1>

            <p>hello friends!</p>
            <div>
                {styles.appL}
            </div>

            <div>
                <img src={pic} alt="" />
            </div>
        </div>
    )
}

export default App;