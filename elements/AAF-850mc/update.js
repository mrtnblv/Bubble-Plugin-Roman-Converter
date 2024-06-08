function(instance, properties, context) {
	let p = properties;
	let i = instance;
   	if ( p.roman_number == "" || p.roman_number == undefined ) return;
    let roman = romanToArabic(p.roman_number);
    i.publishState('arabic',roman);
    
  function romanToArabic(roman) {
    if (typeof roman !== 'string') return NaN;
    const lookup = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let arabic = 0, prev = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
      const current = lookup[roman[i].toUpperCase()];
      if (current === undefined) return NaN; // Invalid Roman numeral
      arabic = current < prev ? arabic - current : arabic + current;
      prev = current;
    }
    return arabic;
  }



}