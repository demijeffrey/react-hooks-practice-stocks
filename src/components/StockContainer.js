import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addToMyPortfolio, filterStocks }) {

  let displayStocks = stocks

  filterStocks !== '' ? displayStocks = filterStocks : displayStocks = stocks

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks.map(stock => <Stock stock={stock} key={stock.id} addToMyPortfolio={addToMyPortfolio} removeFromMyPortfolio={null} />)}
    </div>
  );
}

export default StockContainer;
