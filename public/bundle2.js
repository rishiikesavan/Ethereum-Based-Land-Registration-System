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
        console.log(formData);
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

setInterval(() => {
    web3.eth.getAccounts()
        .then(_accounts => {
            acc = _accounts[0];
            //console.log(acc);
        })
        .catch()
}, 100);