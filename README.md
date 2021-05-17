# Ethereum-Based-Land-Registration-System

1. npm i -g truffle
2. npm i -g ganache-cli
3. npm i -g static-server
4. Add METAMASK extension in the web browser
5. Change port no to 8545 in truffle_config.js
6. Open a new terminal and run the command : 
   ~ ganache-cli
7. Open a new terminal and run the following commands:
   ~ truffle compile
   ~ truffle migrate
8. Copy the contract address from ganache-cli terminal and ABI from build/contracts/LandRegistraction.json and paste it in data.js file.
9. Import local ganache-cli accounts to METAMASK using the private keys in the ganache-cli terminal.
10. In the terminal run
   ~ static-server ./public
11. Now open http://localhost:9080/ in the browser.
