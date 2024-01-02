import pkg, { CustomTokenHeader } from "algosdk";

import { config } from "./config";

const { Algodv2, Indexer } = pkg;

const algod_Address = config.ALGO_URL ;
const algod_Token = config.ALGO_TOKEN;
const algod_Port = config.PORT;
console.log(algod_Port)
// const headers = {"X-API-KEY": config.ALGO_TOKEN };

const index_Address = config.INDEXER_URL ;

export const algoClient = new Algodv2( 
    algod_Token,
    algod_Address,
    algod_Port
    );

export const algoIndexer = new Indexer(
    algod_Token,
    index_Address,
    algod_Port - ":8080"
    // headers
    );
