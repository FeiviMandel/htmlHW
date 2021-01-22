import './App.css';
import React, { useState } from 'react';
import StockDetails from './StockDetails';
import StockInfo from './StockInfo';
import Company from './companies';
import $ from 'jquery';

function App() {
  const [stock, setStock] = useState();
  const [info, setInfo] = useState();
  const [company,setCompany] = useState([]);
  const fetchStockPrice = (e) => {
    e.preventDefault();   
    setStock($('#userInput').val());
    setInfo($('#userInput').val());
  }
  setCompany(company);
  const stockDetails = stock ? <StockDetails stock={stock} /> : null;
  const stockInfo = info ? <StockInfo info={info} /> : null;
  const companyList = company ? <Company company={company} />: null;
  return (
    <div className="App">
      <header>PCS Stock Ticker</header>
      {companyList}
      Enter Stock Ticker Symbol <input id="userInput" />
      <button onClick={fetchStockPrice}>update</button>
      {stockDetails}
      {stockInfo}
    </div>
  );
}

export default App;
