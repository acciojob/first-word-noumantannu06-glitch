function firstWord(s) {
  // your code here
  if (s === "") return s;

  const firstSpaceIndex = s.indexOf(" ");

  if (firstSpaceIndex === -1) return s;

  return s.slice(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));