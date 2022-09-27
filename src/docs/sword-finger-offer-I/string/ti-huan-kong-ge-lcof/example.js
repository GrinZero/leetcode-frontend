// const replaceSpace = (s) => s.replaceAll(' ', '%20');
const replaceSpace = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      arr.push('%20');
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join('');
};
