## Description
This repo contains a the back-end and front-end codes for a React button that you can run on your local host. When you open the website there is a button that you click that connects you to your metamask wallet. Then once the connection is successful, you can see another button "Deploy smart contract" that deploys your smart contract to whatever network your address is connected to.

## Getting started
1-Open a terminal window.

2-Enter the root directory.

3-In terminal, run the following line to open the code in your default editor: code .

4-In your code editor, open a terminal window and install all dependencies by running the following: npm install

5-Run the following line to start to the website in your local host (note: it may take up to 3 minutes to load the page due to heavy dependencies):
npm run start

6-When the website opens on your local host, press the "Connect to wallet" button to connect to your metamask wallet, a window of Metamask should pop up, authenticate with your credentials.

The local host is now connected to your metamask wallet. Next step before deploying your smart contract is to add your contract abi, bytecode and values for the parameters of your constructor (if it has parameters).

If your contract has parameters:
In 'src/App.js' at line 72, add the values that the contract's constructor's parameters will take: await factory.deploy("param1", "param2");

7-From root directory go to '/src/contracts/ContractDetails.json'.

8-Inside "abi" add your contract abi between the 2 brackets. 
!Note: if you copied your abi is contained inside [ ] , delete the [ ] and { } surrounding your abi. 

9-Paste your contract byte code between the "" of the byteCode variable. 
!Note: if you copy your bytecode from ethereum remix platform, your bytcode is contained is the string of numbers and letters in the "object" field.

10-Save your file.

11-Go back to the website and press deploy button.

12-You should be taken to metamask to accept or reject the transaction. Accept the transaction.

In the console you can see your transaction hash. You can copy it then go to rinkeby.etherscan.io (if your network is rinkeby) and paste it in the search bar. There you see your smart contract details of deployment.
