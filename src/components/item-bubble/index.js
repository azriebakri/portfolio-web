import React from 'react';
import './index.scss'

import { useState, useEffect } from 'react';

function Bubble(props) {
    const [windowSize, setWindowSize] =   useState(props.windowSize);

    useEffect(() => {
        setWindowSize(props.windowSize);
        console.log("useEffect Triggered");
    }, [props.windowSize]);

    const checkProps = () => {

        let textDisplay = props.subheader !== null ? 
                <div className="text-container">
                    <div className="header-main"> {props.header} </div>
                    <div className="subheader-main"> {props.subheader} </div>
                </div> : 
                <h1 className="header-main-solo"> {props.header} </h1>

        let sideDisplay = props.yearFrom !== null ? 
                <h1 className="side-container"> {props.yearTo !== null ? `${props.yearFrom}-${props.yearTo}`:`${props.yearFrom}~`} </h1>
                :
                <img src={props.icon1}/>
                    

        let element = 
            <>
                <>
                    {textDisplay}
                </>
                <>
                    {sideDisplay}
                </>
            </>

            return element;
    }

    const setGrid = () => {

        let temp = {...props.grid};

        if(windowSize.width <= 800){
            temp.span = 12;
            temp.column = 1
        }

        console.log(temp);

        return {gridColumn:`${temp.column}/span ${temp.span}`, gridRow:`${temp.row}`}
    }

    return (
        <div className="bubble-container" style={setGrid()}>
            {checkProps()}
        </div>
    );
}

export default Bubble;