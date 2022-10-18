import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [check, setCheck] = useState(false)
  const [filterStocks, setFilterStocks] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  function addToMyPortfolio(stock) {
    console.log(stock)
    // 
    setMyStocks([...myStocks, stock])
    // if(myStocks.includes(stock)) {
    //   setMyStocks(myStocks.filter(myStock => myStock.name !== stock.name))
    // } else {
    //   setMyStocks([...myStocks, stock])
    // }
  }
  function removeFromMyPortfolio (stock) {
    setMyStocks(myStocks.filter(myStock => myStock.name !== stock.name))
  }

function nameSort() {
  setCheck(!check)
  const nameAZ = stocks.sort((a, b) => a.name > b.name ? 1 : -1)
  if(filterStocks !== '') {
    const filterAZ = filterStocks.sort((a, b) => a.name > b.name ? 1 : -1)
    setFilterStocks(filterAZ)
  }
  if(check === true) setStocks(nameAZ)
  if(check === false) setStocks(stocks)
}

function priceSort() {
  setCheck(!check)
  const sortedPrices = [...stocks].sort((a, b) => a.price - b.price)
  if(filterStocks !== '') {
    const filterPrices = [...filterStocks].sort((a, b) => a.price - b.price)
    setFilterStocks(filterPrices)
  }
  
  if(check === false) setStocks(sortedPrices)
  if(check === true) setStocks(stocks)
}

function filterChange(e) {
  setFilterStocks([...stocks].filter(stock => stock.type === e.target.value))
}


  return (
    <div>
      <SearchBar nameSort={nameSort} priceSort={priceSort} filterChange={filterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addToMyPortfolio={addToMyPortfolio} filterStocks={filterStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} removeFromMyPortfolio={removeFromMyPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
