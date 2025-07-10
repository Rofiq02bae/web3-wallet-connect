const connectButton = document.getElementById("connect");
const addressText = document.getElementById("address");
const balanceText = document.getElementById("balance");

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Install MetaMask dulu ya!");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const balance = await provider.getBalance(address);
  const ethBalance = ethers.utils.formatEther(balance);

  addressText.textContent = `Wallet: ${address}`;
  balanceText.textContent = `Balance: ${ethBalance} ETH`;
}

connectButton.addEventListener("click", connectWallet);
