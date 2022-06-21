// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = (props) => {
    return (
    <div className="header">
        <h1>Call a Friend</h1>
        <h3>{props.title}</h3>
        <hr className="hr-header" />
    </div>
    )
}

export default Header;