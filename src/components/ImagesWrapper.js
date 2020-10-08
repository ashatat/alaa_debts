import React from 'react';

function ImagesWrapper(props) {
    console.log(props);
    const { children } = props;
    return (
        <div>
          {children}
        </div>
    )
}

export default ImagesWrapper;