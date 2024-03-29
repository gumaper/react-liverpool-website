import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';

export const Tag = (props) => {
    const template = 
        <div
            style={{
                background: props.bck,
                fontSize: props.size,
                color: props.color,
                padding: '5px 10 px',
                display: 'inline-block',
                fontFamily: 'Righteous'
            }}
        >
            {props.children}
        </div>

    if (props.link) {
        return (
            <BrowserRouter>
                <Link to={props.linkto}>
                    {template}
                </Link>
            </BrowserRouter>
        )
    } else {
        return template
    }
}

export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data
}

export const reversedArray = (actualArray) => {
    let reversedArray = [];

    for(let i=actualArray.length-1; 1>=0; i--) {
        reversedArray.push(actualArray[i])
    }
    return reversedArray
}