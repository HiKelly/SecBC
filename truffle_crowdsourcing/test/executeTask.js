const CST = artifacts.require('./CST.sol')
let PC;
const NodeRSA = require('node-rsa');

let key = new NodeRSA({b:1024});
contract('CST', async function(accounts) {

    before(async () => {
        PC = await CST.deployed();
    })

    it("Test time of uploadTask...", async () => {
        console.log("============  Initially ===================");

        //let id = await  PC.getTmp.call()
        let a = await PC.uploadTask("0xd072b812a49f3c6ccbda896118bbca70f018a1934aac6175899970aad6cd6aa2",
            "0x011001100011",
            "0xf40392bd6a8866ccc46651971b5313a2d3c28f03cf33143ff80c80f955df8ea8",5,
            10000,
            {from:accounts[0], value:100000000000000000});
        console.log(a)
    });


    it("Test time of executeTask...", async () => {
        //console.log("============  Initially ===================");
        //let id = await PC.getTmp.call();
        //const msg = "/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme";
        const msg = "0x39e0702d2eba7a7106e8746d76fa0ad26fb1847a1699f785be6d5f7ad75e8185";
        var encrypted = key.encrypt(msg, 'base64');
        //console.log(msg)
        const message = web3.utils.sha3('Message to sign here.')
        const unlockedAccount = accounts[0]
        const signature = await web3.eth.sign(message, unlockedAccount)
        //console.log("message")
       // console.log(message)
        r = '0x' + signature.substr(2, 64)
        s = '0x' + signature.substr(66, 64)
        //v = '0x' + signature.substr(130, 2)
        v = web3.utils.toDecimal(`0x${signature.substr(130, 2)}`)  + 27;
        /*
        let a = await PC.executeTask(id,
            //"0x78bb4db7484ef49b836d90c37f45ea12a11bccbc",
            "0xd072b812a49f3c6ccbda896118bbca70f018a1934aac6175899970aad6cd6aa2",
            654513,
            "0xf40392bd6a8866ccc46651971b5313a2d3c28f03cf33143ff80c80f955df8ea8",
            "0xf40392bd6a8866ccc46651971b5313a2d3c28f03cf33143ff80c80f955df8ea8",
            "0x39e0702d2eba7a7106e8746d76fa0ad26fb1847a1699f785be6d5f7ad75e8185");
         */
        let a = await PC.executeTask(message, v, r, s, msg, {from:accounts[1]})
        //console.log(a);
    })
    /*
    it("Test time of getResult...", async () => {
        console.log("============  Initially ===================");

        //let id = await  PC.getTmp.call()
        let a = await PC.getResult.call(accounts[0])
        console.log(a.toString(16))
    });*/
})
