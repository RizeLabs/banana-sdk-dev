import React, { useState } from "react";
import "./Popup.scss";
import bananaLogo from "./banana-logo.png";

const TransactionPopover = (props: any) =>{
    const gasFee = 0.001

  return (
    <div className="popover-container">
      <div className="popover">
        <div className="popover-header">
              <img src={bananaLogo} alt="Banana Logo" onClick={() => window.open('https://www.bananawallet.xyz/', '_blank')}/>
        </div>

        <div className="popover-information">
          
          
          <div className="popover-amount">
              {props.amount} ETH 
          </div>  
          <div className="popover-to-container">
              <h2>To: </h2>
              <h3>{props.to.slice(0,5)}...{props.to.slice(-5)}</h3>
          </div>
        
        
          <div className="footer-gas-fee">
              <h2>Gas Fee: </h2>  
              <h3>{gasFee} ETH </h3>
          </div>  
          <div  className="footer-total">
              <h2>Total: </h2>  
              <h3>{ parseFloat(props.amount) + gasFee} ETH </h3>
          </div>
          <div className = "footer-message">
              <p>(incl. {gasFee} ETH gas fee)</p>
          </div>
        </div>

        <div className="popover-buttons">
            <button className="popover-confirm-button" onClick={()=>props.onConfirm(true)}>Confirm</button>
            <button className="popover-reject-button" onClick={()=>props.onConfirm(false)}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPopover;
