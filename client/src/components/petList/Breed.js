import React from 'react';

const Breed = ({onClick, breed, isFavorite, likeAPet}) => (
    <div className="breed">
        <div className="breed-picture" onClick={onClick}>
            <div className='breed-hover'>
                <div className="item-info">
                    <div className="headline">VIEW MORE</div>
                    <div className="line"></div>
                    <div className="date">{breed.name}</div>
                </div>
                <div className="mask"></div>
            </div>
            <img src={breed.picUrl} alt={breed.name}/>
        </div>
        <div className="breed-info">
            <div className="breed-info-head">
                <div className="breed-name">{breed.name}</div>
                <div className="breed-manipulate">
                    <img src={isFavorite ? './images/icon/red-heart.png' : './images/icon/heart.png'} alt='breed-like-icon' onClick={likeAPet}/>
                    <img src='./images/icon/add.png' alt='breed-compare-icon'/>
                    <span onClick={likeAPet}>{breed.likes}</span>
                </div>

            </div>
            <div className="breed-info-content">
                <div>
                    Life Span: {breed.information.lifeSpan}
                </div>
                <div>
                    Temperament: {breed.information.temperament}
                </div>
                <div>
                    Size: {breed.information.avgSize}
                </div>
                <div>
                    Color: {breed.information.color}
                </div>
            </div>
        </div>
    </div>
);
export default Breed;
