import React from 'react';
import { Link } from 'react-router-dom';

const AllShows = ({ allShows }) => {
    console.log(allShows.show.image?.original);
    const handelDetails=(allShows)=>{
        localStorage.setItem('id',allShows.show.id)
    }
    return (
        <div>
            <div class="card mb-3" style={{maxWidth:'540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={allShows.show.image?.original=== undefined ? "https://placehold.co/179x264":allShows.show.image?.original} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{allShows.show.name}</h5>
                            <p class="card-text">language :{allShows.show.language}</p>
                            <p class="card-text">schedule/days :{allShows.show.schedule.days[0]}</p>
                            <p class="card-text"><small class="text-body-secondary">rating: {allShows.show.rating.average}</small></p>
                        </div>
                       <Link to='/details'><button className='btn btn-primary' onClick={()=>handelDetails(allShows)}>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllShows;