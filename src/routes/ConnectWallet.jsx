import React from 'react';
import MetamaskIcon from '../images/metamask-logo.png';
import walletConnectIcon from '../images/walletConnect-logo.png';
import '../styles/ConnectWallet.css';

const ConnectWallet = () => {
  return (
    <div id="modal">

      <div className="header">
        <h3>Connect Wallet
          <span style={{ 'float': 'right' }}>
            <button> X </button>
          </span>
        </h3>
      </div>

      <hr />

      <div className="body">
        <p>Choose your preferred wallet: </p>

        <div className="metamask--button" >
          <img src={MetamaskIcon} alt="metamask" />
          <span>
            Metamask
          </span>
          <button style={{'float': 'right', 'verticalAlign': 'center'}}> > </button>
        </div>

        <div className="walletConnect--button">
        <img src={walletConnectIcon} alt="walletConnect" />
          <p>walletConnect</p>
        </div>
      </div>
    </div>

  )
}

export default ConnectWallet;