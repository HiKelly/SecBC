var Test = artifacts.require("./Test.sol");
let TEST;

contract('Test', function(accounts) {

    before(async () => {
        TEST = await Test.deployed();
    })

    it("ecrecover1: Signed messages should return signing address", async function () {
        const message = web3.utils.sha3('Message to sign here.')
        const unlockedAccount = accounts[0]
        const signature = await web3.eth.sign(message, unlockedAccount)
        console.log("message")
        console.log(message)
        r = '0x' + signature.substr(2, 64)
        s = '0x' + signature.substr(66, 64)
        //v = '0x' + signature.substr(130, 2)
        v = web3.utils.toDecimal(`0x${signature.substr(130, 2)}`)  + 27;
        console.log("r")
        console.log(r)
        console.log("s")
        console.log(s)
        console.log("v")
        console.log(v)
        const recoveredAddress = await TEST.ecrecover1.call(message, v, r, s)
        console.log("recoveredAddress")
        console.log(recoveredAddress)
        //recoveredAddress.should.be.equal(unlockedAccount, 'The recovered address should match the signing address')
        assert.equal(unlockedAccount, recoveredAddress, 'The recovered address should match the signing address');
    })
});
