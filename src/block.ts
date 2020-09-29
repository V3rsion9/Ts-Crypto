class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timpestamp: number;
}

const block: Block = {
    index: 1,
    hash: "8fas7@adsfkj#@FDF",
    previousHash: "3432sdfjuu7824@12",
    data: "here is the data",
    timpestamp: 12342342
}

const genesisBlockChain: [Block] = [block]



export default genesisBlockChain;