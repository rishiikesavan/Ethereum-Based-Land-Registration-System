var contractABI = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "demo",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "helloWorld",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_demo",
                "type": "string"
            }
        ],
        "name": "setHelloWorld",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_superAdmin",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_village",
                "type": "string"
            }
        ],
        "name": "addSuperAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_state",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_district",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_village",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_surveyNumber",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_OwnerAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_marketValue",
                "type": "uint256"
            }
        ],
        "name": "Registration",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "landInfoOwner",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "enum LandRegistration.reqStatus",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "landInfoUser",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "enum LandRegistration.reqStatus",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "property",
                "type": "uint256"
            }
        ],
        "name": "makeAvailable",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "requstToLandOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "viewAssets",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "property",
                "type": "uint256"
            }
        ],
        "name": "viewRequest",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "property",
                "type": "uint256"
            },
            {
                "internalType": "enum LandRegistration.reqStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "processRequest",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "property",
                "type": "uint256"
            }
        ],
        "name": "buyProperty",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "findId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
var contractAddress = '0x6BC7A76270DfA450b204AfbB48965B6D2e6d6189';
let web3;
let contract;
let acc;
let landDetails = {};
//const web3 = new Web3('http://localhost:8545');
//console.log(contractABI);
//console.log(contractAddress);
const $assets = document.getElementById('assets');
const initWeb3 = () => {
    console.log("inside initweb3");
    //console.log(window.ethereum);
    return new Promise((resolve, reject) => {
        //resolve(new Web3('http://localhost:7545'));
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.enable()
                .then(() => {
                    console.log("first if");
                    resolve(
                        new Web3(window.ethereum)
                    );
                })
                .catch(e => {
                    reject(e);
                });
            return;
        }
        if (typeof window.web3 !== 'undefined') {
            console.log("2nd if");
            return resolve(
                new Web3(window.web3.currentProvider)
            );
        }
        resolve(new Web3('http://localhost:7545'));
    })
}

const initContract = () => {
    return new web3.eth.Contract(contractABI, contractAddress);
};

const initApp = () => {
    contract.methods.viewAssets().call({
        from: acc
    })
        .then(data => {
            $assets.hidden = false;
            console.log(data)
            if (!data.length) {
                $assets.innerHTML = "No Owned Assets";
            }
            else {
                const landId = parseInt(data[0]);
                landDetails[acc] = landId;
                console.log(landDetails);
                contract.methods.landInfoOwner(landId).call()
                    .then(data => {
                        console.log(data);
                        document.getElementById('landId').textContent = "Land id : " + landId;
                        document.getElementById('state').textContent = data[0];
                        document.getElementById('district').textContent = data[1];
                        document.getElementById('village').textContent = data[2];
                        document.getElementById('surveyNumber').textContent = data[3];
                    })
                    .catch(e => console.log(e));
            }

        })
        .catch(e => console.log('assets catct', e));

    console.log(contract);
    const $makeAvailable = document.getElementById('makeAvailable');
    const $accept = document.getElementById('accept');
    $makeAvailable.addEventListener('click', (e) => {
        console.log("button clicked");
        contract.methods.makeAvailable(landDetails[acc]).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                $makeAvailable.disabled = true;
            })
            .catch(e => console.log(e));
    })
    $accept.addEventListener('click', (e) => {
        console.log("accept button clicked");
        contract.methods.processRequest(landDetails[acc], 3).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                $makeAvailable.disabled = true;
            })
            .catch(e => console.log(e));
    })

    // contract.methods.Registration(
    //     's',
    //     'd',
    //     'v',
    //     1,
    //     '0x42Cda27D624Cdb06A8F3ED855De20fF80dEc0Eae',
    //     10
    // )
    //     .send({ from: '0x9bD9Fed61b3E9cBA672262E9dBb4Fad765a48397', gas: 3000000 })
    //     .then(data => console.log(data))
    //     .catch(e => console.log("register catch", e));
}

//const contract = new web3.eth.Contract(contractABI, contractAddress);


document.addEventListener('DOMContentLoaded', () => {
    console.log("doc loaded")
    //initApp();
    const $address = document.getElementById('address');
    initWeb3()
        .then(_web3 => {
            web3 = _web3;
            contract = initContract();
            web3.eth.getAccounts()
                .then(_accounts => {
                    acc = _accounts[0];
                    $address.innerHTML = acc;
                    console.log("current address", acc);
                    initApp();
                })
            // initApp();
        })
    //console.log("document loaded");
    // contract.methods.helloWorld().call()
    //     .then(result => {
    //         document.getElementById('title').innerHTML = result;
    //         //console.log(result);
    //     })
})
