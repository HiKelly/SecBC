const CST = artifacts.require('./CST.sol')
let PC;
contract('CST', async function(accounts)
{ 
    /*var fromJson = {from : web3.eth.accounts[0]};
    var addr = web3.eth.accounts[0];
    var myDate1 = new Array();
    var myDate2 = new Array();
    var tmp_result = 0;
    var result = 0;
    var num = 0;
    var current;
    var average;
    var MAX = 0;
    var MIN = 10000000;
    var N = 50;  //Test times
    var i;
    var j = 0;
    */
    before(async () => {
        PC = await CST.deployed();
    })

    it("Test time of uploadTask...", async () => {
        //var PC = CST.at("0xF1cb1A965EDFb70d152607C5d4Ba92F66A688ea8");
        //var PC = CST.at("0xe411bcf30e358843aa8b5df51493245c81713b25");
        // console.log("============  Initially ===================");

        //let id = await  PC.getTmp.call()
        let a = await PC.uploadTask("0xd072b812a49f3c6ccbda896118bbca70f018a1934aac6175899970aad6cd6aa2",
            "0x011001100011",
            "0xf40392bd6a8866ccc46651971b5313a2d3c28f03cf33143ff80c80f955df8ea8",
            10000,
            {from:accounts[0]});
        //console.log(a);
    });
    it("Test time of getTask...", async ()=>
    {
        //var PC = SOBP.at("0xe411bcf30e358843aa8b5df51493245c81713b25");
        console.log("============  Initially ===================");
		//let id = await PC.getTmp.call();
        let a = await PC.getTask.call();
        console.log(a.valueOf());
        /*return PC.getTmp().then (function ()
        {
            timer(PC.getTask, 011001100011, N);

            function timer(fn, a, total) 
            {
                i = 0;
                while(i < total)
                {
                    myDate1[i] = new Date().getTime();
                    fn(a).then(function(result)
                    {
                        
                        console.log("Transaction address---" + result);
                        myDate2[num] = new Date().getTime();
                        current = myDate2[num] - myDate1[num];
                        result = tmp_result + current;                    
                        tmp_result = result;
                        if(current > MAX)
                        {
                            MAX = current;
                        }    
                        if(current < MIN)
                        {
                            MIN = current;
                        } 
                        num ++;
                        average = result/num;
                        console.log("Total Running time of " + num + " times---" + result);
                        console.log("Average time ---" + average);
                        console.log("MAX time ---" + MAX);
                        console.log("MIN time ---" + MIN);
                    });                    
                    i ++;                    
                }  
    
            }
           
        });*/
    });

});

