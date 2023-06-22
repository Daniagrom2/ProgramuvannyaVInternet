function compareTexts(text1, text2, locale, ignoreCase) {
  const options = {sensitivity: ignoreCase ? 'base' : 'accent'};
  const collator = new Intl.Collator(locale, options);
  
  return collator.compare(text1, text2);
}
console.log(compareTexts('étudiant', 'ETUDIANT', 'fr')); // 1
console.log(compareTexts('étudiant', 'ETUDIANT', 'fr', true)); // 0
console.log(compareTexts('resume', 'résumé', 'en')); // -1
console.log(compareTexts('resume', 'résumé', 'en', true)); // 0
