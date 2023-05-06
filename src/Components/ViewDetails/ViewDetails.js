import React, { useEffect, useState } from 'react';
import AllViewDetails from './AllViewDetails';
import BookingModal from '../BookingModal/BookingModal';

const ViewDetails = ({detailsId}) => {
    const [booking,setBooking]=useState(null);
    console.log(booking);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);
    return (
       <div>
         <div className='container'>
              {
                data.map(allShows => <AllViewDetails
                    key={allShows.score}
                    allShows={allShows}
                    setBooking={setBooking}
                ></AllViewDetails>)
            }
        </div>
        <BookingModal 
        booking={booking}
        ></BookingModal>
       </div>
    );
};

export default ViewDetails;