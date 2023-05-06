import React, { useEffect, useState } from 'react';
import Homebanner from './Homebanner';

const HomeBanners = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" class="d-block w-100" height={500} alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" class="d-block w-100" height={500} alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src="https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg" class="d-block w-100" height={500} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default HomeBanners;