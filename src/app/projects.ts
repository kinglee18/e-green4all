import {ethers} from "ethers";
import abi from "./abi.json";

export async function getProjectCount(provider: ethers.providers.Web3Provider) {

    const projects = new ethers.Contract('0xF23d0A91D81c2d9A362AdB0FAA1d43d086575916', abi.abi, provider)
    return await projects.projectCount().toString()
}
