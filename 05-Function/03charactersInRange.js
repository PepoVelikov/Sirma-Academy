function range(char1, char2) {
  
  const start = char1.charCodeAt(0);
  const end = char2.charCodeAt(0);

  for (let i = start + 1; i < end; i++) {
    console.log(String.fromCharCode(i));
  }
}

range('a', 'd');