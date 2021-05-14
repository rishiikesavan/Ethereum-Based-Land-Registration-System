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

const initWeb3 = () => {
    console.log("inside initweb3");
    //console.log(window.ethereum);
    return new Promise((resolve, reject) => {
        // resolve(new Web3('http://localhost:7545'));
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
    //app();
    const $search = document.getElementById('search');
    const $request = document.getElementById('request');
    const $buy = document.getElementById('buy');
    contract.methods.viewAssets().call({
        from: acc
    })
        .then(data => console.log(data))
        .catch(e => console.log('assets catch', e));
    contract.methods.landInfoUser(7224455400878).call()
        .then(data => {
            console.log(data);
        })
        .catch(e => console.log(e));

    $request.addEventListener('click', (e) => {
        e.preventDefault();
        contract.methods.requstToLandOwner(7224455400878).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
            })
            .catch(e => console.log(e));
    })
    $buy.addEventListener('click', (e) => {
        e.preventDefault();
        contract.methods.buyProperty(7224455400878).send({ from: acc, gas: 3000000, value: web3.utils.toWei('12', 'ether') })
            .then(data => {
                console.log(data);
            })
            .catch(e => console.log(e));
    })
    //console.log($regLand);
    //console.log("hey there", document.getElementById('registerLand'));
    $search.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = e.target.elements;
    })
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("doc loaded")
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
        .catch(e => console.log(e));
})


