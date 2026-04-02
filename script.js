function firstWord(s) {
  // your code here
	 if (s === "") return s;

  firstSpaceIndex = s.indexOf(" ");

  (firstSpaceIndex === -1) return s;

  s.slice(0, firstSpaceIndex);
	
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
