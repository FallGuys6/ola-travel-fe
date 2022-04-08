import React, { Component } from "react";
import Slider from "react-slick";
import 'antd/dist/antd.css';
import Support from "./support";
import { Row, Col } from 'antd';

const slideImage = [
    {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    },
    {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    },
    {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#"
    }
]

export default class slideMultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2.5,
            slidesToScroll: 2.5
        };
        return (
            <Row>
                <div className="container-1200">
                    <div className="slideMultipleItems">
                        <Slider {...settings}>
                            {
                                slideImage.map((e, i) => (
                                    <a href={e.linkImage} key={i} className="slideMultipleItems__image">
                                        <img src={e.urlImage} alt="" />
                                    </a>
                                ))
                            }
                        </Slider>
                    </div>
                    <Support />
                </div>
            </Row>
        );
    }
}