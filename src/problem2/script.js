const validAddressValidator = () => {
    let ETHaddr = document.getElementById('ETHaddr');
    let validAddr = document.getElementById('valid-addr');
    let address = document.getElementById('ETHaddr').value;
    let isValid = ethers.utils.isAddress(address);

    ETHaddr.classList.remove("is-validd", "is-invalidd");

    if (isValid) {
        ETHaddr.classList.add("is-validd");
        validAddr.style.visibility = "visible";
        validAddr.innerHTML = "Looks Good!"
    }
    else {
        ETHaddr.classList.add("is-invalidd");
        validAddr.style.visibility = "visible";
        validAddr.innerHTML = "Please enter a valid address!"
        document.getElementById('submit-button').classList.add("disabled")
    }
    return [address, isValid];
}

let ethAmt = document.getElementById('ETHamt');

const isDigit = () => {

    let validAmt = document.getElementById('valid-amt');
    let amount = document.getElementById('ETHamt').value;
    let isnum = /^[0-9\.]*$/g.test(amount);

    ethAmt.classList.remove("is-validd", "is-invalidd");

    if (amount.length == 0) {
        isnum = false;
    }

    if (isnum) {
        ethAmt.classList.add("is-validd");
        validAmt.style.visibility = "visible";
        validAmt.innerHTML = "Looks Good!";
    }
    else {
        ethAmt.classList.add("is-invalidd");
        validAmt.style.visibility = "visible";
        validAmt.innerHTML = "Please enter a proper value!";
        document.getElementById('submit-button').classList.add("disabled")
    }
    return [amount, isnum];
}

const bothValid = () => {
    let [add, isval] = validAddressValidator();
    let [amt, isnum] = isDigit();
    if (isval && isnum) {
        document.getElementById('submit-button').classList.remove("disabled")
    }
}

const modalVals = () => {
    let val = document.getElementById("modal-text");
    let [add, isval] = validAddressValidator();
    let [amt, isnum] = isDigit();
    val.innerHTML = "You are sending " + amt + " ETH to: " + add + ".";
}
