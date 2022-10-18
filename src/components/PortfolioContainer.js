import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, removeFromMyPortfolio }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocks.map(stock => <Stock stock={stock} key={stock.id} removeFromMyPortfolio={removeFromMyPortfolio} addToMyPortfolio={null} />)}
    </div>
  );
}

export default PortfolioContainer;
