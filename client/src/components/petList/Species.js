import React from 'react';

const Species = ({onClick, name, picUrl, selectedFilter}) => (
    <div className= "species-circle" onClick={onClick}>
        <div className="spacer"></div>
        <div className={name === selectedFilter ? "circle-selected" : "circle"}>
            <img onClick={onClick} src={picUrl} alt={name}/>
            <p>{name}</p>
        </div>
    </div>

);
export default Species;
