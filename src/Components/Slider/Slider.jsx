import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import arrowIcon from "../../assets/icons/arrowr-icon.svg"
import episodesIcon from "../../assets/icons/episodes-icon.svg"
import heartIcon from "../../assets/icons/heart-icon.svg"
import { formatNumber } from "../../utils/formatNumber";
import Button from "../Button/Button";
import { useState } from "react";


function Carousel({ sliderData, onClick }) {


    const breakpoint = 850;




    // Slider config
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    console.log('carousel', sliderData)

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {sliderData.sliderData?.length > 0 && (
                    sliderData.sliderData.map((d) => (
                        <article key={d.mal_id} className="anime-details__hero">

                            <img loading="lazy" src={d.images.webp.large_image_url} alt="" />
                            <div className="anime-details__hero__r">
                                <div className='anime-details__hero__r__date-info'>
                                    <p className={d.status === 'Currently Airing' ? 'airing' : 'finished'}>
                                        {d.status}
                                    </p>
                                    <p>{`${d.season} ${d.year}`}</p>
                                </div>
                                <div className='anime-details__hero__r__main'>
                                    <div>

                                        <p>{d.title_jap}</p>
                                        <p>{d.title}</p>

                                    </div>
                                    <span>{d.rating}</span>
                                    <h1>{d.title}</h1>
                                    <div className="synopsis">
                                        <p>{d.synopsis}</p><span>[...]</span>

                                    </div>


                                    <Button onClick={() => onClick(d.mal_id)} text='Read more' />
                                </div>
                            </div>


                        </article>

                    ))


                )}
            </Slider>




        </div >
    )
}
export default Carousel