const validAddressValidator = () => {
    document.getElementById('ETHaddr').classList.remove("is-validd");
    document.getElementById('ETHaddr').classList.remove("is-invalidd");
    const address = document.getElementById('ETHaddr').value;

    const isValid = ethers.utils.isAddress(address);
    console.log(isValid);   
    // return isValid;
    if (isValid) {
        document.getElementById('ETHaddr').classList.add("is-validd");
        document.getElementById('valid-div').style.visibility = "visible";
        document.getElementById('valid-div').innerHTML = "Looks Good!"
    }
    else {
        document.getElementById('ETHaddr').classList.add("is-invalidd");
        document.getElementById('valid-div').style.visibility = "visible";
        document.getElementById('valid-div').innerHTML = "Please enter a valid address!"

    }
}
