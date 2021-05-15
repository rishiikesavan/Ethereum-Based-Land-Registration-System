var contractABI = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allLand",
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
    },
    {
        "constant": true,
        "inputs": [],
        "name": "allLands",
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
    }
];
var contractAddress = '0x0Af206921e011b5Ec71c0Ed79bc7Fa131A34f41D';
let web3;
let contract;
let acc;
//const web3 = new Web3('http://localhost:7545');
//console.log(contractABI);
//console.log(contractAddress);
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
    contract.methods.viewAssets().call({
        from: acc
    })
        .then(data => console.log(data))
        .catch(e => console.log('assets catct', e));
    const $regLand = document.getElementById('registerLand');
    const $regAdmin = document.getElementById('registerAdmin');
    //console.log($regLand);
    //console.log("hey there", document.getElementById('registerLand'));
    $regLand.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        //console.log(e.target.elements[0].value);
        // console.log(typeof formData[0].value,
        //     typeof formData[1].value,
        //     typeof formData[2].value,
        //     typeof formData[3].value,
        //     typeof formData[4].value,
        //     typeof formData[5].value);
        //error while registering to be checked!!!
        contract.methods.Registration(
            formData[0].value,
            formData[1].value,
            formData[2].value,
            parseInt(formData[3].value),
            formData[4].value,
            parseInt(formData[5].value))
            .send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data)
                alert('Land Registered Successfully');
            })
            .catch(e => console.log("register catch", e));
    })

    $regAdmin.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        //console.log(e.target.elements[0].value);
        console.log(formData[0].value,
            formData[1].value)
        //error while registering to be checked!!!
        contract.methods.addSuperAdmin(
            formData[0].value,
            formData[1].value)
            .send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data)
                alert('Village Admin Registered Successfully');
            })
            .catch(e => console.log("register catch", e));
    })
}

//const contract = new web3.eth.Contract(contractABI, contractAddress);


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
    // //console.log("document loaded");
    // contract.methods.helloWorld().call()
    //     .then(result => {
    //         document.getElementById('title').innerHTML = result;
    //         //console.log(result);
    //     })
})

const app = function () {

    // contract.methods.viewAssets().call({
    //     from: acc
    // })
    //     .then(data => console.log(data, accounts));
    contract.methods.helloWorld().call()
        .then(data => console.log(data))
        .catch(e => console.log("catch in HelloWorld", e));
    contract.methods.setHelloWorld("new hello world 2").send({ from: String(acc) })
        .then(data => console.log("new hello world function 2", data))
        .catch(e => console.log("catch in setHelloWorld", e));
};

