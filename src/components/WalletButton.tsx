import {Button, Tooltip, Typography} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import {useContext} from "react";
import {Web3Context1} from "@/app/web3/web3Connectors";

const WalletButton = () => {
    const {connectWallet, disconnect, isAuthenticated, address} = useContext(Web3Context1);
    const onClick = async () => {

        if (isAuthenticated) {
            disconnect();
        } else {
            try {
                await connectWallet();
            } catch (e) {
                console.log(e);
            }
        }
    }
    if (isAuthenticated && address) {
        return <Tooltip title={address}>
            <PersonIcon/>
        </Tooltip>
    }

    return <Button variant="contained" color={"info"} onClick={onClick}>
        Connect Wallet
    </Button>
};

export default WalletButton;
