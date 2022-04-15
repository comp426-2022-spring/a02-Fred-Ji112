import minimist from 'minimist';
import { coinFlips, countFlips } from "./modules/coin.mjs";

const argv = minimist (process.argv.slice(2));
const flip_count = argv["number"]||1;
const flip_list = coinFlips(flip_count);

console.log(flip_list);
console.log(countFlips(flip_list));