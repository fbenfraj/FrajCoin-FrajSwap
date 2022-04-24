# `FrajCoin & FrajSwap: ERC20 token and Decentralized Exchange`

FrajCoin is an ERC-20 token and FrajSwap is a decentralized exchange.
They are both build with Solidity and the contracts are deployed on the Rinkeby Network (Ethereum testnet).
Use the Rinkeby Authenticated Faucet or the Chainlink Rinkeby Faucet to get Ethereum for free😉 (they are of course worth nothing)
You can use the widgets on the webapp to buy FrajCoins with ETH or sell them to get ETH back.

This project is for demonstration purpose only.

## DEMO

Demo Link: [FrajSwap Demo](https://effulgent-arithmetic-eb91e1.netlify.app/)

## Local deployment

### Dependencies

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installing

1. Clone the repo
   ```sh
   git clone https://github.com/fbenfraj/FrajCoin-FrajSwap.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file and fill the required variables.
   ```
    INFURA_API_KEY=KEY
    RINKEBY_MNEMONIC="mountains supernatural bird ..."
    );
   ```
   You can get an Infura API key on https://infura.io/
   You can get your Mnemonic in the settings of your Metamask wallet.
   PLEASE REMEMBER THAT YOUR MNEMONIC IS LINKED TO **ALL OF YOUR METAMASK ACCOUNTS**. Do not push your mnemonic on GitHub.

### Executing program

- Deploy the contract on the Rinkeby network
  ```
    npm run rinkebyDeploy
  ```
- Starting the client
  ```
    npm run start
  ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

Contributors names and contact info

BEN FRAJ Farouk - [@f_benfraj](https://twitter.com/f_benfraj) / farouk.ben-fraj@outlook.com
Project Link: [https://github.com/fbenfraj/FrajCoin-FrajSwap.git](https://github.com/fbenfraj/FrajCoin-FrajSwap.git)
