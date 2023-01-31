import React from 'react'


export function NextArrows(props){
    return(
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick} ></div>
        </>
    )
}

export function PrevArrows(props){
    return(
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick} ></div>
        </>
    )
}