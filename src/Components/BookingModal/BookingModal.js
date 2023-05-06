import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BookingModal = ({booking}) => {
    const bookProduct =()=>{
        toast.success('Movie Booked', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    console.log(booking)
    return (
        <div>
          
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src={booking?.show.image?.original} width={100} alt="" />
                             <h5 class="card-title">{booking?.show.name}</h5>
                            <p class="card-text">language :{booking?.show.language}</p>
                            <p class="card-text">schedule/days :{booking?.show.schedule.days[0]}</p>
                            <p class="card-text"><small class="text-body-secondary">rating: {booking?.show.rating.average}</small></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={bookProduct} data-bs-dismiss="modal">BookNow</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookingModal;