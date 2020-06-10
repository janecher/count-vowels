//business logic
const countVowels = function(sentence) {
  let numberOfVowels = 0;
  const vowels = ["a", "o", "i", "u", "e", "A", "O", "I", "U", "E"];
  for(let i = 0; i < sentence.length; i++){
    if (vowels.includes(sentence.charAt(i))) {
      numberOfVowels++;
    };
  }
  return numberOfVowels;
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const sentence = $("input").val();

  });
});