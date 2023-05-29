import {Button, Tooltip, Typography} from "@mui/material";
import useWeb3Provider from "@/app/web3/web3Connectors";
import PersonIcon from "@mui/icons-material/Person";

const WalletButton = () => {
    const {connectWallet, disconnect, state} = useWeb3Provider();
    const onClick = async () => {

        if (state.isAuthenticated) {
            disconnect();
        } else {
            try {
                await connectWallet();
            } catch (e) {
                console.log(e);
            }
        }
    }
    if (state.isAuthenticated && state.address) {
        return <Tooltip title={state.address}>
            <PersonIcon/>
        </Tooltip>
    }

    return <Button variant="contained" color={"info"} onClick={onClick}>
        Connect Wallet
    </Button>
};

export default WalletButton;
