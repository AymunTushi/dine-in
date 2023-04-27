import React from 'react';
import notfound from '../../../images/4o4.jpg'

const Notfound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <img src={notfound} alt='' className='w-100'></img>
        </div>
    );
};

export default Notfound;