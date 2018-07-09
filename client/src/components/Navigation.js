import React from 'react';

const NavBar = ({bars}) => (
    <div className="nav-bar">
        <div className="title">
            <img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>PawPal
        </div>
        <div className="bars">
            {/*{!bars || bars.map(b => <span key={b}>{b}</span>)}*/}
            {!bars || bars.map(b => <a key={b} href={handleNavigate(b)}>{b}</a>)}
        </div>
    </div>
);
const handleNavigate = (bars) => {
    let destination = '';
    if (bars === 'DETAILS') {
        destination = '#details';
    } else if (bars === 'Home') {
        destination = '#home';
    } else if (bars === 'MY PAWPAL') {
        destination = '#my-pawpal';
    } else if (bars === 'PREPARE') {
        destination = '#pet-prepare';
    } else if (bars === 'CHARACTERISTICS') {
        destination = '#pet-chara';
    } else if (bars === 'PROFILE') {
        destination = '#pet-profile';
    }
    return destination;
}

export default NavBar;
