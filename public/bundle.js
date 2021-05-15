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

    const $makeAvailable = document.getElementById('makeAvailable');
    const $accept = document.getElementById('accept');
    const $reject = document.getElementById('reject');
    const $requester = document.getElementById('requester');

    let landId;
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
                landId = parseInt(data[0]);
                landDetails[acc] = landId;
                console.log(landDetails);
                if (landDetails[acc] !== undefined) {
                    contract.methods.landInfoOwner(landDetails[acc]).call({ gas: 3000000 })
                        .then(data => {
                            console.log(data);
                            if (data[4] == true)
                                $makeAvailable.disabled = true;
                            if (data[5] !== "0x0000000000000000000000000000000000000000") {
                                $requester.innerHTML = "You have a request from : " + data[5];
                                $makeAvailable.disabled = true;
                                $accept.hidden = false;
                                $reject.hidden = false;
                            }
                        })
                        .catch(e => console.log("is available catch"));
                }
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
        .catch(e => console.log('assets catch', e));

    console.log(contract);





    $makeAvailable.addEventListener('click', (e) => {
        console.log("button clicked");
        contract.methods.makeAvailable(landDetails[acc]).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                $makeAvailable.disabled = true;
                alert("Property made available to sale");
            })
            .catch(e => console.log(e));
    })
    $accept.addEventListener('click', (e) => {
        console.log("accept button clicked");
        contract.methods.processRequest(landDetails[acc], 3).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                $makeAvailable.disabled = true;
                alert("Request Accepted");
            })
            .catch(e => console.log(e));
    });
    $reject.addEventListener('click', (e) => {
        console.log("reject button clicked");
        contract.methods.processRequest(landDetails[acc], 2).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                $makeAvailable.disabled = true;
                alert("Request Rejected");
            })
            .catch(e => console.log(e));
    });
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
})

setInterval(() => {
    web3.eth.getAccounts()
        .then(_accounts => {
            acc = _accounts[0];
            //console.log(acc);
        })
        .catch();
}, 100);
//asdfas