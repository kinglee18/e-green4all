"use client"
import React, {useEffect, useState, createContext} from 'react';
import {ethers} from 'ethers';
import {JsonRpcSigner} from "@ethersproject/providers";

declare global {
    interface Window {
        ethereum?: any;
    }
}

interface IWeb3State {
    address: string | null;
    currentChain: number | null;
    signer: JsonRpcSigner | null;
    provider: ethers.providers.Web3Provider | null;
    isAuthenticated: boolean;
}

const initialWeb3State: IWeb3State = {
    address: null,
    currentChain: null,
    signer: null,
    provider: null,
    isAuthenticated: false,
};


export const Web3Context1 = createContext<IWeb3State | null>(null);

export const Web3Provider = ({children}: { children: React.ReactNode }) => {
    const [state, setState] = useState<IWeb3State>(initialWeb3State);

    const connectWallet = async () => {
        if (state.isAuthenticated) return;

        try {
            const {ethereum} = window;

            if (!ethereum) {
                console.error('No ethereum wallet found');
                return;
            }

            const provider = new ethers.providers.Web3Provider(ethereum);
            const accounts: string[] = await provider.send("eth_requestAccounts", []);


            if (accounts.length > 0) {
                const signer = await provider.getSigner();
                const chainId = Number((await provider.getNetwork()).chainId);

                setState((prevState) => ({
                    ...prevState,
                    address: accounts[0],
                    signer,
                    currentChain: chainId,
                    provider,
                    isAuthenticated: true,
                }));

                localStorage.setItem('isAuthenticated', 'true');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    const disconnect = () => {
        setState(initialWeb3State);
        localStorage.removeItem('isAuthenticated');
    };

    useEffect(() => {
        if (localStorage.hasOwnProperty('isAuthenticated')) {
            connectWallet();
        }
    }, []);

    useEffect(() => {
        if (typeof window.ethereum === 'undefined') return;

        window.ethereum.on('accountsChanged', (accounts: string[]) => {
            setState((prevState) => ({...prevState, address: accounts[0]}));
        });

        window.ethereum.on('chainChanged', (network: string) => {
            setState((prevState) => ({...prevState, currentChain: Number(network)}));
        });

        return () => {
            window.ethereum.removeAllListeners();
        };
    }, []);

    return (
        <Web3Context1.Provider value={{...state, connectWallet, disconnect}}>
            {children}
        </Web3Context1.Provider>
    );
}
