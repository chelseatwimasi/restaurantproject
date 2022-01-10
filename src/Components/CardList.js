import React from "react";
import Card from "./Card";

function CardList(props) {
  console.log(props.clicks.card1Clicks);
  return (
    <div>
      <div className="cards-list">
        {/* level 1 */}
        <Card
          image={props.images[0]}
          clicks={props.clicks.card1Clicks}
          clickHandler={props.click1Handler}
        />
        <Card
          image={props.images[1]}
          clicks={props.clicks.card1Clicks}
          clickHandler={props.click1Handler}
        />
        <Card image={props.images[2]} />
        <Card image={props.images[3]} />
        <Card image={props.images[4]} />
        <Card image={props.images[5]} />
        <Card image={props.images[6]} />
        <Card image={props.images[7]} />
        <Card image={props.images[8]} />
        <Card image={props.images[9]} />

        {/* Level 2 */}
        {/* {props.images.map((image) => {
          return <Card image={image} />;
        })} */}

        {/* {props.images.map((image, index) => {
          return (
            <Card
              image={image}
              cardClicks={props.cardClicks[index]}
              cardID={props.cardID[index]}
              clickHandler={props.clickHandler}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default CardList;
