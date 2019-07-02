import React from 'react';
import add2 from '@/tools/add';


export default class HomePage extends React.Component{
    componentDidMount(){
        console.log("mount");
        console.log(add2(1, 2));
    }

    render(){
        return (
            <div>
                <h1>Home Page</h1>

                <p>hello friends!</p>
            </div>
        )
    }
}