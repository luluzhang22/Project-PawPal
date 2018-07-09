import React from 'react';
const generateDegreePic = (degree) => {
    const pics = [];
    for (let i = 1; i <= degree; i++) {
        pics.push(<img className="degree-icon" src="./images/icon/foot.png" alt="degree-icon"/>)
    }
    return pics;
};
const PetChara = ({chara, pic}) => {

    return (
        <div className="pet-chara" id='pet-chara'>
            <div className="pet-chara-picture">
                <img src={pic} alt="pet character"></img>
            </div>
            <div className="pet-chara-detail">
                <span><img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>CHARACTERISTICS</span>
                <div>AFFECTION: {generateDegreePic(chara.affection)}</div>
                <div>INQUISITIVE: {generateDegreePic(chara.inquisitive)} </div>
                <div>BARK: {generateDegreePic(chara.bark)} </div>
                <div>ODOUR: {generateDegreePic(chara.odour)} </div>
                <div>SHEDDING: {generateDegreePic(chara.sheddingAmount)} </div>
            </div>
        </div>
    )
};
export default PetChara;
