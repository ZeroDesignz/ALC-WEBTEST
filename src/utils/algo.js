import pkg from 'algosdk';

import {config} from './config';

const {Algodv2, Indexer} = pkg;

export const algoClient = new Algodv2('', config.ALGO_URL, '');

export const algoIndexer = new Indexer('', config.INDEXER_URL, '')
