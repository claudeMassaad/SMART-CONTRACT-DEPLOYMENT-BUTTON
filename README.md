## Description
This repo contains a the back-end and front-end codes for a React button that you can run on your local host. When you open the website there is a button that you click that connects you to your metamask wallet. Then once the connection is successful, you can see another button "Deploy smart contract" that deploys your smart contract to whatever network your address is connected to.

## Getting started
1-Open a terminal window.

2-Enter the root directory.

3-In terminal, run the following line to open the code in your default editor: code .

4-In your code editor, open a terminal window and install all dependencies by running the following: npm install

5-Run the following line to start to the website in your local host (note: it may take up to 3 minutes to load the page due to heavy dependencies):
npm run start

6-Press the "Connect to wallet" button to connect to your metamask wallet, a window of Metamask should pop up, authenticate with your credentials.

The local host is now connected to your metamask wallet, meaning that you can deploy your smart contract right away:

7-From root directory go to '/contracts', and add your smart contract with .sol extension.

8-Compile your smart contract (using remix ethereum or truffle) and go to '/src/App.js' , there you will find 2 variables under the import statements: contractByteCode and contractAbi.

9-Paste your contract byte code between the "" of the contractByteCode variable.

10-Paste your abi (you can delete the already written brackets) in the contractAbi variable.

11-Save your file.

12-Go back to the website and press deploy button.


In the console you can see your transaction hash. You can copy it then go to rinkeby.etherscan.io (if your network is rinkeby) and paste it in the search bar. There you see your smart contract details of deployment.
