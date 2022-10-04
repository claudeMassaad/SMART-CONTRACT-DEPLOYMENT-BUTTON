import { ContractFactory } from "ethers";

const factory = new ContractFactory(contractAbi, contractByteCode);

// If your contract requires constructor args, you can specify them here
const contract = await factory.deploy(deployArgs);

console.log(contract.address);
console.log(contract.deployTransaction);
