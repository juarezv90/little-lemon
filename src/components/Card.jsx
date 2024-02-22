import React from "react";
//Styling for card is located in the app.scss file


function Card({imgUrl, title, price, mealInfo}) {
  return (
    <div className="card">
      <img src={imgUrl} alt="" className="cardImage"/>
      <div className="card_data">
        <div className="card_head">
          <p className="title">{title}</p> <p className="price">${price}</p>
        </div>
        <p>
          {mealInfo}
        </p>
        <strong>
          Order a Delivery <img src="./dishicon.svg" alt="" />
        </strong>
      </div>
    </div>
  );
}

export default Card;
