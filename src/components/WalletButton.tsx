import {Button} from "@mui/material";

const WalletButton = () => {
    const connectWallet = () => {
        console.log("connect wallet");
    }


    return (
        <Button variant="contained" color={"info"} onClick={connectWallet}>
            Connect wallet
        </Button>
    );
};

export default WalletButton;
