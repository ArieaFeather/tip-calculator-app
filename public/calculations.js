//DOM Objects
let display = document.querySelectorAll(".display");
let reset = document.querySelector("#reset");
let tipobj = document.querySelectorAll(".tipamount");
let billInput = document.querySelector("#num1");
let customTip = document.querySelector("#num2");
let peopleInput = document.querySelector("#num3");
let bsplitDisplay = document.querySelector(".totalsplit");
let tsplitDisplay = document.querySelector(".tipsplit");
//Variables
let bill = "";
let newTip = "";
let cTip = "";
let numOfPeople = "";
let tipsplit = "0.00";
let totalsplit = "0.00";

//Event Listeners
reset.addEventListener("click", resetBill);

peopleInput.addEventListener("keydown", function () {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        numOfPeople = numOfPeople + event.key;
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        alert("Only Numbers Please");
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        alert("Only Numbers Please");
    } else if (event.keyCode === 8 || event.keyCode === 46) {
        numOfPeople = numOfPeople.slice(0, -1);
    }
    modifyDisplay();
    calculate(bill, newTip, numOfPeople);
});
billInput.addEventListener("keydown", function () {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 190) {
        bill = bill + event.key;
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        alert("Only Numbers Please");
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        alert("Only Numbers Please");
    } else if (event.keyCode === 8 || event.keyCode === 46) {
        bill = bill.slice(0, -1);
    }
    modifyDisplay();
    calculate(bill, newTip, numOfPeople);
});
customTip.addEventListener("keydown", function () {
    switch (newTip) {
        case "5":
            newTip = "";
            break;
        case "10":
            newTip = "";
            break;
        case "15":
            newTip = "";
            break;
        case "25":
            newTip = "";
            break;
        case "50":
            newTip = "";
            break;
    }
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        cTip = newTip + event.key;
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        alert("Only Numbers Please");
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        alert("Only Numbers Please");
    } else if (event.keyCode === 8 || event.keyCode === 46) {
        cTip = cTip.slice(0, -1);
    }
    newTip = cTip;
    modifyDisplay();
    calculate(bill, newTip, numOfPeople);
});

for (let i = 0; i < tipobj.length; i++) {
    tipobj[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "5":
                newTip = this.innerHTML;
                cTip = "";
                modifyDisplay();
                calculate(bill, newTip, numOfPeople);
                break;
            case "10":
                newTip = this.innerHTML;
                cTip = "";
                modifyDisplay();
                calculate(bill, newTip, numOfPeople);
                break;
            case "15":
                newTip = this.innerHTML;
                cTip = "";
                modifyDisplay();
                calculate(bill, newTip, numOfPeople);
                break;
            case "25":
                newTip = this.innerHTML;
                cTip = "";
                modifyDisplay();
                calculate(bill, newTip, numOfPeople);
                break;
            case "50":
                newTip = this.innerHTML;
                cTip = "";
                modifyDisplay();
                calculate(bill, newTip, numOfPeople);
                break;
        }
    });
}

//Functions

function resetBill() {
    bill = "";
    newTip = "";
    numOfPeople = "";
    tipsplit = "0.00";
    totalsplit = "0.00";
    modifyDisplay();
}

function modifyDisplay() {
    bsplitDisplay.innerText = totalsplit;
    tsplitDisplay.innerText = tipsplit;
    if (bill === "" && numOfPeople === "") {
        reset.style.opacity = 0.3;
    } else {
        reset.style.opacity = 1;
    }
}

function calculate(bill, newTip, numOfPeople) {
    newTip = Number(newTip) * 0.01;
    let totalTip = Number(bill) * newTip;
    tipsplit = totalTip / Number(numOfPeople);
    tipsplit = tipsplit.toFixed(2);

    totalsplit = (Number(bill) + totalTip) / Number(numOfPeople);
    totalsplit = totalsplit.toFixed(2);

    bsplitDisplay.innerText = totalsplit;
    tsplitDisplay.innerText = tipsplit;
    switch (bsplitDisplay.innerText) {
        case "NaN":
            bsplitDisplay.innerText = "0.00";
            break;
        case "Infinity":
            bsplitDisplay.innerText = "0.00";
            break;
    }
    switch (tsplitDisplay.innerText) {
        case "NaN":
            tsplitDisplay.innerText = "0.00";
            break;
        case "Infinity":
            tsplitDisplay.innerText = "0.00";
            break;
    }
}
