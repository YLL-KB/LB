import React, { Component } from 'react'
import { Card,Carousel } from 'antd';
import './ui.less'

export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Card title="文字背景轮播">
                    <Carousel effect="fade">
                        <div>
                            <h3>湖人总冠军1</h3>
                        </div>
                        <div>
                            <h3>湖人总冠军2</h3>
                        </div>
                        <div>
                            <h3>湖人总冠军3</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt=""/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
