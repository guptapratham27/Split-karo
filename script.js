const billamount=document.querySelector('#bill-amount');
const tipamount=document.querySelector('#tip-amount');
const numofpeople =document.querySelector('#people-number');
const generatebillbutton=document.querySelector('#genid');
const tipbutton=document.querySelectorAll('.tipbutton');
const totalamount=document.querySelector('#amounttext');
const finaltip=document.querySelector('#ftipamount');
const finalsplit=document.querySelector('#splitamount');
const resetbutton=document.querySelector('.resetbutton');
const quotedisplay=document.getElementById('quote-display');


var bill=billamount.value;
var customtip=tipamount.value;
var people=numofpeople.value;
var tippercent="";
var finaltipamount="";
var amountaftertip="";
var calculatedamount="";
var finalsplitamount="";



tipbutton.forEach(button=> {

    
    button.addEventListener('click',()=>{

        tipbutton.forEach(btn => {
            btn.style.backgroundColor = '';
            
        });

        button.style.backgroundColor='blanchedalmond';
        tippercent=button.innerText;

        calculateamountaftertip(tippercent);
        
    })
    
});

function calculateamountaftertip(tippercent){


    if(tippercent!=""){

        switch (tippercent) {
            case '5%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.05);
                finaltipamount=(Number(billamount.value)*0.05);
                
                break;
            case '10%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.10);
                finaltipamount=(Number(billamount.value)*0.10);
                break;
            case '65%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.65);
                finaltipamount=(Number(billamount.value)*0.65);
                break;
            case '20%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.20);
                finaltipamount=(Number(billamount.value)*0.20);

                break;
            case '40%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.40);
                finaltipamount=(Number(billamount.value)*0.40);

                break;
            case '50%':
                amountaftertip=Number(billamount.value)+(Number(billamount.value)*0.50);
                finaltipamount=(Number(billamount.value)*0.50);

                break;
        
            default:
                break;
        }
    }
    else{

        amountaftertip=Number(billamount.value);
    }

}

function calculatetotalamount(){

    
    if(billamount.value!=""){

        if(tipamount.value!=""){

            calculatedamount=Number(billamount.value)+Number(tipamount.value);
        }

        else{

            calculatedamount=amountaftertip;
            
        }    
    }

    else{

        calculatedamount=0;
    }

    displaytotalamount(calculatedamount);

}


function displaytotalamount(calulatedamount){

    totalamount.innerText=calulatedamount;

}

function displayfinaltip(){

    if(tipamount.value!=""){

        finaltip.innerText=Number(tipamount.value);
        return;
    }
    else if(tippercent!=""){

        finaltip.innerText=finaltipamount;
    }
    else{

        finaltip.innerHTML='0';

    }
    
}

function imagedesign(){

    document.getElementById("splitimage").style.display = "none";

    // Show the split hands
    const left = document.getElementById("hand-left");
    const right = document.getElementById("hand-right");
  
    left.classList.remove("hidden");
    right.classList.remove("hidden");
  
    // Trigger split animation
    left.style.transform = "translateX(-60px)";
    right.style.transform = "translateX(60px)";
  
}
function splittask(){

    
    if(numofpeople!="" && billamount.value!=""){

        finalsplitamount=calculatedamount/Number(numofpeople.value);
    }
    else{
        finalsplitamount=0;
    }

    finalsplit.innerText=finalsplitamount;
    


}


generatebillbutton.addEventListener("click",()=>{

    imagedesign();
    calculatetotalamount();
    displayfinaltip();
    calculateamountaftertip();
    splittask();

    const quotes=["\"Split karlete hain na bhai\"","\"Ajj Bill Tera Bhai bhareyga\"","\"Kitne Paise hain Sabke paas ?\"","\"So we Split , we Split\"","\"Bhot bill hogya Bhai\"","\"Khel Khatam Hai Abb toh\""];
    const randomIndex=Math.floor(Math.random() * quotes.length);
    quotedisplay.innerText=quotes[randomIndex];
})

resetbutton.addEventListener("click",()=>{

    var tippercent="";
    var finaltipamount="";
    var amountaftertip="";
    var calculatedamount="";
    var finalsplitamount="";
    numofpeople.value="";
    billamount.value="";
    tipamount.value="";
    totalamount.innerText="";
    finaltip.innerText="";
    finalsplit.innerText="";
    quotedisplay.innerText="Splitting is Sharing";
    
})




