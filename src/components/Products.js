import React, { useState, useEffect } from "react";
import axios from "axios";
import "./products.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Collapse from "react-bootstrap/Collapse";

export default function Products() {
  const [open, setOpen] = useState(false);
  const [post, setpost] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        let result = await axios.get(`https://fakestoreapi.com/products`);

        console.log(result.data);
        setpost(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);

  return (
    <>
      {/* Heading */}
      <h1>Our Products</h1>
      <hr />
      {/* Product cards */}
      <div id="products">
        {post.map((e, index) => (
          <div key={index}>
            <CardGroup>
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  {/* Title */}
                  <Card.Title>{e.title}</Card.Title>
                  {/* Catagory */}
                  <Card.Subtitle>
                    <b> Category:</b> <i>{e.category}</i>
                  </Card.Subtitle>
                  {/* Price */}
                  <Card.Subtitle>
                    <b>Cost: $.{e.price}</b>{" "}
                  </Card.Subtitle>
                  {/* Rating */}
                  <Card.Subtitle>
                    <b> Ratings: {e.rating.rate}</b> <i>({e.rating.count})</i>
                  </Card.Subtitle>

                  {/* Description */}

                  <Card.Text>
                    {" "}
                    <a
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      <b id="desc">Description</b>{" "}
                      <i> (click here for product details)</i>
                    </a>
                    <Collapse in={open}>
                      <div id="example-collapse-text">{e.description}</div>
                    </Collapse>{" "}
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                  <Button variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        ))}
      </div>
    </>
  );
}
