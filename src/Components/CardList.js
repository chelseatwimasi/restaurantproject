import React from "react";
import Card from "./Card";

function CardList(props) {
  console.log(props.clicks.card1Clicks);
  return (
    <div>
      <div className="cards-list">
        {/* level 1 */}
        <a href="https://recipes.howstuffworks.com/menus/who-invented-macaroni-and-cheese.htm">
          <Card
            image={props.images[0]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.history.com/news/a-slice-of-history-pizza-through-the-ages">
          <Card
            image={props.images[1]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://historydaily.org/the-accidental-invention-of-chicken-wings-americas-favorite-bar-food">
          <Card
            image={props.images[2]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[3]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[4]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[5]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[6]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[7]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[8]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>
        <a href="https://www.google.com/">
          <Card
            image={props.images[9]}
            clicks={props.clicks.card1Clicks}
            clickHandler={props.click1Handler}
          />
        </a>

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
