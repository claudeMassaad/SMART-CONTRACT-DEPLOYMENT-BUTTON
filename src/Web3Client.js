// import Web3 from "web3";
// var Tx = require("ethereumjs-tx").Transaction;
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ContractFactory } from "ethers";

// let selectedAccount;
// let provider;

export const Init = async () => {
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("Please install metamask");
      return;
    } else {
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

  // provider = window.ethereum;

  // if (typeof provider !== "undefined") {
  //   provider
  //     .request({ method: "eth_requestAccounts" })
  //     .then((accounts) => {
  //       selectedAccount = accounts[0];
  //       console.log(`Selected account is ${selectedAccount}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return;
  //     });

  //   window.ethereum.on("accountsChanged", function (accounts) {
  //     selectedAccount = accounts[0];
  //     console.log(`Selected account changed to ${selectedAccount}`);
  //   });
  // }
};

// const web3 = new Web3(provider);

// const account1 = currentAccount;

// export const res = web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Smart Contract data
//   const data =
//     "0x6080604052348015600f57600080fd5b5060006040518060400160405280600581526020017f7374657665000000000000000000000000000000000000000000000000000000815250905050603f8060586000396000f3fe6080604052600080fdfea26469706673582212200febac3ba7b351efa15f1621359692fa2f945db47535b397cb4ee005780b4b0764736f6c63430008070033";

//   // Create transaction object
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(1000000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei("5", "gwei")),
//     data: data,
//   };

//   // // Sign the transaction
//   const tx = new Tx(txObject, { chain: "rinkeby" });
//   // tx.sign(privateKey1);

//   const serializedTx = tx.serialize();
//   const raw = "0x" + serializedTx.toString("hex");

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log("err:", err, "txHash:", txHash);
//     //Use this txHash to find the contract on Etherscan
//   });
// });
