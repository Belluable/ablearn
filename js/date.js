// var moment = require('moment');  // CommonJS 방식
import moment from 'moment'; // ESM 방식

moment.locale('ko');

const d = new Date();
console.log('🚀 ~ d:', d.toLocaleString());
const m = moment();
console.log('🚀 ~ m:', m.fromNow());
console.log('🚀 ~ m:', m.format('LLL'));
console.log('🚀 ~ m:', m.format('dddd'));
console.log('🚀 ~ m:', m.format('YYYY-MM-DD (ddd) hh:mm:ss'));

const writtenDate = moment('2024-05-30');
console.log('🚀 ~ writtenDate:', writtenDate.fromNow());

// import, export
import Cat, { Dog } from './oop.js';
const nabi = new Cat('nabi');
const mong = new Dog('mong');
// console.log('🚀 ~ nabi:', nabi);
