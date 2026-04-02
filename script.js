function firstWord(s) {
  // your code here
  const trimmed = s.trimStart();
  const firstSpaceIndex = trimmed.indexOf(" ");

  if (firstSpaceIndex === -1) return trimmed;

  return trimmed.slice(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));