const validAddressValidator = () => {
    const address = document.getElementById('ETHaddr').value;
    const isValid = ethers.utils.isAddress(address);
    console.log(isValid);   
}