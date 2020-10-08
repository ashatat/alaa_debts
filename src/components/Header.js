import React from 'react';

const Header = (props) => {
    console.log(props.children)
    const { className, sirName } = props;
    const name = 'ahmed';

    return (
        <ul className={className} blabla="Aaa">
            <li>Home</li>
            <li>App</li>
            <li>About us</li>
            <li>I am {name} {sirName}</li>
        </ul>
    )
};

export default Header;
