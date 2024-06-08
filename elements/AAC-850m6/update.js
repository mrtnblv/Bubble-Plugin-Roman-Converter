function(instance, properties, context) {
	let p = properties;
	let i = instance;
   	if ( p.arabic_number == "" || p.arabic_number == undefined ) return;
    let arabicNumber = parseInt(p.arabic_number);
    i.publishState('roman',arabicToRoman(arabicNumber));
    
    function arabicToRoman(num) {
        if (isNaN(num))
          return NaN;
        const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
        let roman = '';
        for (let i in lookup) {
          while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
  	}
    
    
    

}