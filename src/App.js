import logo from "./logo.svg";
import "./App.css";
// import {getTransactionCount} from './deploy.js'
import Web3 from "web3";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ContractFactory } from "ethers";

const contractByteCode =
  "6080604052348015600f57600080fd5b5060006040518060400160405280600581526020017f7374657665000000000000000000000000000000000000000000000000000000815250905050603f8060586000396000f3fe6080604052600080fdfea26469706673582212200febac3ba7b351efa15f1621359692fa2f945db47535b397cb4ee005780b4b0764736f6c63430008070033";

const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

let provider;
let signer;

function App() {
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("Please install metamask");
      return;
    } else {
      provider = new ethers.providers.Web3Provider(ethereum);
      signer = provider.getSigner();
      console.log("Wallet exists");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found a valid account ", account);
      setCurrentAccount(account);
    } else {
      console.log("No valid account");
    }
  };

  const connectWalletHandler = async () => {
    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);

      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const deploy = async () => {
    console.log(signer);
    const factory = new ContractFactory(contractAbi, contractByteCode, signer);

    // If your contract requires constructor args, you can specify them here
    const contract = await factory.deploy();

    console.log(contract.address);
    console.log(contract.deployTransaction);
  };

  const deployButton = () => {
    return <button onClick={deploy}>Deploy Contract</button>;
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <div>{currentAccount ? deployButton() : connectWalletButton()}</div>
    </div>
  );
}

export default App;