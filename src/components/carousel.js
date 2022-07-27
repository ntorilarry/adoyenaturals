import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "../styles/carousel.css";
import soap1 from "../assets/soap1.jpg";
import soap2 from "../assets/soap12.jpg";
import soap3 from "../assets/soap123.jpg";
import soap4 from "../assets/soap1234.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
class Meals extends Component {
  state = {
    items: [
      {
        id: 1,
        imageUrl: soap1,
      },
      { id: 2, imageUrl: soap2 },
      { id: 3, imageUrl: soap3 },
      { id: 4, imageUrl: soap4 },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="max-w-7xl py-10 mx-auto  sm:px-6 lg:px-8" id="meals">
        <Carousel breakPoints={breakPoints} itemPadding={[0, 20]}>
          {items.map((item) => (
            <div key={item.id}>
              <img
                className="object-cover shadow-lg rounded-lg food"
                src={item.imageUrl}
                alt=""
              />
              {/* <p className="text-center"> {item.title}</p> */}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Meals;
