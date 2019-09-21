import React from 'react';
import data from '../../../data';
import NavButton from '../navButton/NavButton';

import './jeans.scss';
import Box from '../box/Box';

const Jeans = (props) => {
    return (
        <Box height="75vh"
            backgroundImg={data.home.jeans.background}
            overlayCol="#ffffff94"
        >
            <div className="jeans">
                <p className="header">
                    {data.home.jeans.header}
                </p>
                <p className="main">
                    {data.home.jeans.main}
                </p>
                {data.home.jeans.links.map(({ label, route }, i) => <NavButton route={route} variant="seconadry" className="link" >{label}</NavButton>)
                }
            </div>
        </Box>
    )
}

export default Jeans