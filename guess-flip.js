import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = minimist (process.argv.slice(2));

argv['call'];

const guess = argv.call;
if(guess != 'heads' & guess != 'tails') {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(guess));
}