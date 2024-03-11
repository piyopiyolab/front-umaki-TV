import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import Button from "../Button/Button";


function Carousel({ sliderData, onClick }) {


    const breakpoint = 850;


    // Check if body has lightmode class'
    const isLightMode = document.body.classList.contains('lightmode');

    // Slider config
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className={`slider-container ${isLightMode ? 'lightmode' : ''}`}>
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
                                    <p>{`${d.season ? d.season.charAt(0).toUpperCase() + d.season.slice(1) : null} ${d.year}`}</p>
                                </div>
                                <div className='anime-details__hero__r__main'>
                                    <div>

                                        <p>{d.title_jap}</p>
                                        <p>{d.title}</p>

                                    </div>
                                    <span>{d.rating}</span>
                                    <h3>{d.title}</h3>
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