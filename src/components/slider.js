import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Aambari from '../images/Aambari.jpg';
import Aambari1 from '../images/Aambari1.jpg';
import Aambari2 from '../images/Aambari2.jpg';

export default class slider extends Component {
  render() {
    return (
        <Carousel className="px-1 py-2 carousel">
  <Carousel.Item>
    <img
      className="d-xl w-100"
      src={Aambari}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Aambari1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Aambari2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
}
