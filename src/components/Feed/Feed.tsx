import React, { useEffect } from 'react';

import { getHomeFeed } from '../../services/twitter.service';

const Feed = () => {
    // console.log(process.env);
    useEffect(() => {
        getHomeFeedge();
    }, []);
    return <div>HELLELELELELEL</div>;
};

export default Feed;
