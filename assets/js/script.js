function MegaWallet() {
    let Wallet = 0;

    const Deposits = document.querySelector(".Deposits-Input");
    const Harvests = document.querySelector(".Harvests-Input");

    const DepositsBtn = document.querySelector(".DepositsBtn");
    const HarvestsBtn = document.querySelector(".HarvestsBtn");

    const RealWallet = document.querySelector(".RealWallet");

    DepositsBtn.onclick = () => {
        Wallet += Number(Deposits.value);
        Deposits.value = "";

        RealWallet.textContent = Wallet;

    };

    HarvestsBtn.onclick = () => {
        if (Wallet < Number(Harvests.value)) {
            alert("Your account balance is insufficient .!")
        } else if (Wallet >= Number(Harvests.value)) {
            Wallet -= Number(Harvests.value);
            Harvests.value = "";

            RealWallet.textContent = Wallet;
        }
    }
}

MegaWallet();
