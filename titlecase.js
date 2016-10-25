function titlecase(str){
  const prepositions = ["the", "of", "a", "but"];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i+=1){
    if (prepositions.includes(words[i]) && i !== 0){
      continue;
    }
    else {
    words[i] = words[i].split("");
    words[i][0] = words[i][0].toUpperCase();
    words[i] = words[i].join("");
  }
  }
  return words;
}

console.log(titlecase("The the amazing adventures of superman but"));
