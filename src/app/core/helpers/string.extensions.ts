interface String {
  replaceAt(index: number, char: string): string;
  replaceAll(search: string, replacement: string): string;
}

String.prototype.replaceAt = function (index: number, char: string): string {
  let a = this.split('');
  a[index] = char;
  return a.join('');
};

String.prototype.replaceAll = function (search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
