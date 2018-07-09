import React from 'react';

const PetTemp = ({temp, picUrl}) => (
    <div className="pet-temperament">
        <div className="pet-temp-detail">
            <img className="pet-back-pic" src={picUrl} alt='pet-back-pic'/>
            <div className="pet-temp-title"><img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>TEMPERAMENT</div>
            <div className="pet-temp-content">{temp || 'default temperament'}</div>
        </div>
    </div>
);
export default PetTemp;
