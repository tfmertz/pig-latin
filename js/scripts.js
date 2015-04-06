function pigLatin(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var consonants = 'bcdfghjklmnpqrstvwxyz';

  if ($.inArray(word[0], vowels) !== -1) {
    return word + "ay";
  } else if ($.inArray(word[0], consonants) !== -1) {
    do {
      word = word.substring(1) + word[0];
      if (word[word.length - 1] === 'q') {
        if (word[0] === 'u') {
          word = word.substring(1) + word[0];
        }
      }
    } while ($.inArray(word[0], vowels) === -1);
    return word + "ay";
  }
}

jQuery(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    $("#error").empty();
    var word = $("#word").val();
    if (word.search(/[^a-z]/i) !== -1) {
      $("#error").prepend("<p>Only letters allowed</p>");
      $("#result").hide();
    } else {
      var pig_word = pigLatin(word);
      $("#pig_word").text(pig_word);
      $("#result").show();
    }

    event.preventDefault();
  });
});
