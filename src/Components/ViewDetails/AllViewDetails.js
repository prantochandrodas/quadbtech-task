import React from 'react';

const AllViewDetails = ({ allShows,setBooking }) => {
    const getLocalStoreAgeId = localStorage.getItem('id');
    console.log(allShows?.show);
    return (
        <div>
            {
                allShows?.show?.id == getLocalStoreAgeId ? <>
                    <div class="card mb-3">
                        <img src={allShows.show.image?.original=== undefined ? "https://placehold.co/179x264":allShows.show.image?.original} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{allShows.show.name}</h5>
                            <p class="card-text">{allShows.show.summary.split('<p>').join('').split('</p>').join('')}</p>
                            <p class="card-text">language :{allShows.show.language}</p>
                            <p class="card-text">schedule/days :{allShows.show.schedule.days[0]}</p>
                            <p class="card-text"><small class="text-body-secondary">rating: {allShows.show.rating.average}</small></p>
                            <button className='btn btn-primary d-inline' 
                            onClick={()=>setBooking(allShows)} data-bs-toggle="modal" data-bs-target="#exampleModal">BookNow</button>
                           
                        </div>
                       
                    </div>

                </> : <></>
            }
        </div>
    );
};

export default AllViewDetails;