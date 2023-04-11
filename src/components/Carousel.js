import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarCarousel1 from "../img/CarCarousel1.png"
import CarCarousel2 from "../img/CarCarousel2.jpg"
import CarCarousel3 from "../img/CarCarousel3.jpg"
const items = [
    {
        src: CarCarousel1,
        caption: 'Lamborghini Huracán',
        key: 1,
    },
    {
        src: CarCarousel2,
        caption: 'Lamborghini Aventador',
        key: 2,
    },
    {
        src: CarCarousel3,
        caption: 'Ford Mustang',
        key: 3,
    },
];

function CarouselCars(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
               
            >
                <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100vh', objectFit: 'cover' }}/>
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            style={{ width: "100%", height: '100vh', display: "flex", justifyContent: "center", overflow: 'hidden', marginTop: "1rem" }}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default CarouselCars;