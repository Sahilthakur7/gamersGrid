import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://psmedia.playstation.com/is/image/psmedia/god-of-war-listing-thumb-01-ps4-eu-19jun17?$Icon$"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>God Of War</h3>
                    <p>A PS4 Exclusive !!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://apollo2.dl.playstation.net/cdn/EP0006/CUSA11608_00/FREE_CONTENT3ogQgtrTJKNDp65OoLN6/FIFA19_02.jpg"
                    alt="Third slide"
                />

            <Carousel.Caption>
                <h3>FIFA 19</h3>
                <p>One sports game to rule them all</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147087-games-review-red-dead-redemption-2-screens-image13-hdbmt7yoru.jpg"
                alt="Third slide"
            />

        <Carousel.Caption>
            <h3>Red Dead Redemption 2</h3>
            <p>Biggest game of the decade</p>
        </Carousel.Caption>
    </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;
