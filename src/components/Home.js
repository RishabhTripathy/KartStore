import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Products from "./Products";

export default function Home() {

  return (
<>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 600}}
          src="./images/C1.jpg"
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>New Arrivals! Hand Bags</h3>
          <p>Newest Arrivals on Handbags. Buy 1 Get 1 Free. Starting @Rs499 each</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 600}}
          src="./images/C2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Gift You Loved Ones</h3>
          <p>Hurry!! Limited Offer!! Gifts Starting Just @Rs.199</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 600}}
          src="./images/C3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Clothings</h3>
          <p>
            Shop for fameous brand!! SALE 50% Off. Hurry before sale ends!!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<Products />


</>
  )
}
