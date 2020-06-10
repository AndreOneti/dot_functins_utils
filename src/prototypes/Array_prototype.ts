'use strict'

interface Array<T> {
  getLastElement(): string;
  getFirstElement(): string;
  getMiddleElement(): Array<T> | null;
  log(): Array<T>;
}

Array.prototype.getLastElement = function () {
  if (this.length <= 0)
    return null;
  return this[this.length - 1];
};

Array.prototype.getFirstElement = function () {
  if (this.length <= 0)
    return null;
  return this[0];
};

Array.prototype.getMiddleElement = function () {
  if (this.length <= 0)
    return null;
  let middle = [Math.floor(this.length / 2)];
  let elements: any[] = [];
  this.length % 2 == 0
    ? middle.push(Math.floor(this.length / 2) - 1)
    : null;
  /* istanbul ignore next */
  middle.sort((a, b) => (a > b) ? 1 : -1);

  middle.forEach(el => {
    elements.push(this[el]);
  });
  return elements;
};

Array.prototype.log = function () {
  console.log(`[${(new Date()).format('dd/mm/yyyy - hh:mm:ss')}] > `, this);
  return this;
}
