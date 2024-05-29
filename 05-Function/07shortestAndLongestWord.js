function removePunctuation(text) {
  const punctuation = ['.', ',', '!', '?', ';', ':', '-', "'", '"'];
  let cleantext = '';

  for (let i = 0; i < text.length; i++) {
      if (!punctuation.includes(text[i])) {
          cleantext += text[i];
      }
  }

  return cleantext;
}

function findShortestAndLongestWord(text) {
  // Премахване на всички знаци за пунктуация от изречението
  const cleantext = removePunctuation(text);

  const words = cleantext.split(' ');
  
  const shortestWord = words.reduce(function(shortest, current) {
      return current.length < shortest.length ? current : shortest;
  }, words[0]);
  
  const longestWord = words.reduce(function(longest, current) {
      return current.length > longest.length ? current : longest;
  }, words[0]);
  
  console.log("Longest -> " + longestWord);
  console.log("Shortest -> " + shortestWord);
}

findShortestAndLongestWord('Hello how are you today? I hope you are fine');
findShortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');