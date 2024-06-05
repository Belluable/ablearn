console.log('ableanbell');

import moment from 'moment';
import Cat from './oop.js';
export default Cat;

export const rand = (start, end) =>
  Math.floor(Math.random() * (end - start) + start);

const LOCALE_MAPPER = {
  korea: 'ko',
  us: 'en',
  japan: 'ja',
};

export function fromNow(dt, locale = 'us') {
  const localeCode =
    locale?.length < 3
      ? locale.toLowerCase()
      : LOCALE_MAPPER[locale].toLowerCase();
  moment.locale(LOCALE_MAPPER[locale].toLowerCase());
  return moment(dt).fromNow();
}

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.first = function () {
  return this[this.length - 1];
};

console.log('**>>', fromNow(new Date()));
// console.log('**>>', fromNow(new Date(), 'japan'));

// console.log('🚀 ~ [1, 2, 3].first():', [1, 2, 3].first());
// console.log('🚀 ~ [1, 2, 3].last():', [1, 2, 3].last());
