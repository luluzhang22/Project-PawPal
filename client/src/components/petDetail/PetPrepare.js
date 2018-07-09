import React from 'react';

const filter = ["DIET", "HOUSE", "TRAINING", "PLAY", "CLEAN", "HEALTH"];

const PetPrepare = ({selectedFilter, curContent, onClickFilter}) => (
    <div className="pet-prepare" id="pet-prepare">
        <div className="pet-prepare-title">
            <img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>PREPARE FOR A NEW FRIEND
        </div>
        <div className="pet-prepare-detail">
            <div className="pet-prepare-content">
                <div className="spacer"></div>
                <div className="circle"><p>{curContent}</p></div>
            </div>
            <div className="pet-prepare-filter">
                {
                    filter.map(f =>
                        <div key={f} className="pet-prepare-circle">
                            <div className="spacer"></div>
                            <div className={f === selectedFilter ? "circle-selected" : "circle"}
                                 onClick={() => onClickFilter(f)}>
                                <img src={"./images/icon/pet-prepare/" + f + ".JPG"} alt='pet-prepare-filter-img'/>
                                <p>{f}</p>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    </div>
);
export default PetPrepare;
