async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById("wallet-address").innerText = "Wallet: " + accounts[0];
      window.web3 = new Web3(window.ethereum);
    } catch (err) {
      alert("User denied wallet connection");
    }
  } else {
    alert("MetaMask not detected");
  }
}

async function sendEth() {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const tx = {
    from: accounts[0],
    to: '0x9Bc9265df7e6473016934261df31F96Ce71Bd62b', // Replace with a real address
    value: web3.utils.toWei("0.01", "ether")
  };
  await web3.eth.sendTransaction(tx);
  alert("Transaction sent");
}
