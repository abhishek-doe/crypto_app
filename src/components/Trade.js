import React from 'react'
import "./Trade.css"
import Crypto from "../images/trade.png"

const Trade = () => {
  return (
    <div className='trade'>
      <div className='container'>

        { /* Left Side */ }
        <div className='left'>
            <img src={Crypto} alt="" />
        </div>

        { /* Right Side */ }
        <div className='right'>
            <h2>Earn passive income with crypto.</h2>
            <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
        </div>

      </div>
    </div>
  )
}

export default Trade
