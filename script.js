function firstWord(s) {
  // your code here
	 if (str === "") return str;

  // Find the index of the first space.
  const firstSpaceIndex = str.indexOf(" ");

  // If there's no space, return the whole string.
  if (firstSpaceIndex === -1) return str;

  // Return the substring from start up to (but not including) the first space.
  return str.slice(0, firstSpaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
