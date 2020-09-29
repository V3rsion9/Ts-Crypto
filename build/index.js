"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJs = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timpestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timpestamp = timpestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timpestamp, data) => CryptoJs.SHA256(index + previousHash + timpestamp + data).toString();
// 4
Block.validateBlockStructure = (block) => {
    if (typeof block.index === "number"
        && typeof block.hash === "string"
        && typeof block.previousHash === "string"
        && typeof block.data === "string"
        && typeof block.timpestamp === "number") {
        return true;
    }
    else {
        return false;
    }
};
const genesisBlock = {
    index: 1,
    hash: "6AB761009B1AB36086006FBDCD0786C5",
    previousHash: "FD2FD0EED99692BBBCB02423791AB5BD",
    data: "here is the data",
    timpestamp: Math.round(new Date().getTime())
};
const blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const generateTimeStamp = () => Math.round(new Date().getTime());
// 3
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateBlockStructure(candidateBlock)) {
        return false;
    }
    else if (candidateBlock.previousHash !== previousBlock.hash) {
        return false;
    }
    else if (candidateBlock.index !== previousBlock.index + 1) {
        return false;
    }
    else if (getHash(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
// 2
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
// 1
const createNewBlock = (data) => {
    const latestBlock = getLatestBlock();
    const latestHash = latestBlock.hash;
    const newIndex = getLatestBlock().index + 1;
    const newTimeStamp = generateTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, latestBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, latestHash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
};
const getHash = (block) => Block.calculateBlockHash(block.index, block.previousHash, block.timpestamp, block.data);
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(getBlockchain());
//# sourceMappingURL=index.js.map