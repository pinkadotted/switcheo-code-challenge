// const validAddressValidator = () => {
//     const addr = document.getElementById('ETHaddr');
//     const isAddr = ethers.isAddress(addr);
//     if (!isAddr) {
//         console.log('not an addr!')
//     }
// }

// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'ethereum');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
