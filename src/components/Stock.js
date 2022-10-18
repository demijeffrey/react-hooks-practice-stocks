import React from "react";

function Stock({ stock, addToMyPortfolio, removeFromMyPortfolio }) {

  return (
    <div>
      <div className="card" onClick={() => addToMyPortfolio === null ? removeFromMyPortfolio(stock) : addToMyPortfolio(stock)}> 
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
