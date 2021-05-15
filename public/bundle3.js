let web3;
let contract;
let acc;
const $address = document.getElementById('address');
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
    let targetLand;
    let targetValue;
    const $assets = document.getElementById('assets');
    const $searchLand = document.getElementById('searchLand');
    const $search = document.getElementById('search');
    const $request = document.getElementById('request');
    const $buy = document.getElementById('buy');

    // contract.methods.viewAssets().call({
    //     from: acc
    // })
    //     .then(data => console.log(data))
    //     .catch(e => console.log('assets catch', e));
    console.log($searchLand);
    // contract.methods.allLands().call({ gas: 3000000 })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(e => console.log("allLands catch"))
    $searchLand.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        contract.methods.allLands().call({ gas: 3000000 })
            .then(data => {
                for (let land of data) {
                    targetLand = land;
                    contract.methods.landInfoUser(land).call()
                        .then(data => {
                            console.log(data);
                            targetValue = parseInt(data[1]);
                            targetValue += Math.ceil(targetValue / 10);
                            targetValue = targetValue.toString();
                            console.log(targetValue);
                            if (data[2] == true || (data[2] == false && data[3] !== "0x0000000000000000000000000000000000000000")) {// change to true
                                $assets.hidden = false;
                                document.getElementById('landId').innerHTML = "Land id : " + land;
                                document.getElementById('owner').innerHTML = data[0];
                                document.getElementById('marketValue').innerHTML = data[1];
                            }
                            if (data[4] == 3) {
                                $request.disabled = true;
                                $buy.disabled = false;
                            }
                            if ($assets.hidden) {
                                alert("No availabe Land");
                            }
                        })
                        .catch(e => console.log(e));
                }

            })
            .catch(e => console.log("allLands catch"))
    })

    $request.addEventListener('click', (e) => {
        e.preventDefault();
        contract.methods.requstToLandOwner(targetLand).send({ from: acc, gas: 3000000 })
            .then(data => {
                console.log(data);
                alert("Request sent Successfully");
            })
            .catch(e => console.log(e));
    })
    $buy.addEventListener('click', (e) => {
        e.preventDefault();
        contract.methods.buyProperty(targetLand).send({ from: acc, gas: 3000000, value: web3.utils.toWei(targetValue, 'ether') })
            .then(data => {
                console.log(data);
                alert("Property Bought Successfully");
            })
            .catch(e => console.log(e));
    })
    //console.log($regLand);
    //console.log("hey there", document.getElementById('registerLand'));
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("doc loaded")
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


//asdfsad
setInterval(() => {
    web3.eth.getAccounts()
        .then(_accounts => {
            acc = _accounts[0];
            //console.log(acc);
            //$address.innerHTML = acc;
        })
        .catch();
}, 100);