// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palaindrome testing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

// Defines a TranslateedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns content processed for palaindrome testing (overrides from Phrase)
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

// prototype is basically inheritence
TranslatedPhrase.prototype = new Phrase();

let frase = new TranslatedPhrase("recognize", "reconocer")

let phrase = new Phrase('Racecar');
console.log(frase.palindrome());
