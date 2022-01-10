import React from "react";

function Card(props) {
  // console.log(props)
  return (
    <div>
      <div class="card 1" onClick={() => props.clickHandler()}>
        <div class="card_image">
          <img src={props.image} />
        </div>
        <div class="card_title title-white">
          <p>Card Title</p>
          <p>CLICKS: {props.clicks}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
