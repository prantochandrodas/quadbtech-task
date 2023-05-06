import React, { useEffect, useState } from 'react';
import AllShows from '../AllShows/AllShows';
import './Shows.css'
const Shows = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);
    console.log(data);
    return (

        <div className='showsGrid container pt-4'>

            {
                data.map(allShows => <AllShows
                    key={allShows.score}
                    allShows={allShows}
                ></AllShows>)
            }
        </div>
    );
};

export default Shows;