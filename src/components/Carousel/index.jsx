import React, { useState } from 'react'
import ChevronLeft from '../../images/chevron_left.svg'
import ChevronRight from '../../images/chevron_right.svg'
import './styles.css'

function Carousel(props) {
    const [slideIdx, setSlideIdx] = useState(0);
    const imgSize = () => {
        const carouselImg = document.querySelector('.carousel-container img')
        if (!carouselImg) {
            return 0;
        }
        return carouselImg.width;
    }

    const onNext = () => {
        if (slideIdx === props.img.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className="carousel">
            <div className="carousel-container"
                style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}>
                {props.img.map((picture) =>
                    < img className='carousel-container-img'
                        src={picture}
                        key={picture}
                        alt='photos-logement' />
                )}
            </div>
            <div className={'carousel-controls'}>
                <img src={ChevronLeft} alt="chevron-left" className={'chevron'} onClick={onPrev} />
                <img src={ChevronRight} alt='chevron-right' className={'chevron'} onClick={onNext} />
            </div>
            <div className={'carousel-idx'}>{slideIdx + 1} / {props.img.length}</div>
        </div>
    )
}

export default Carousel