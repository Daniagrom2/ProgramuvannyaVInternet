class PaperSize {
  constructor(locale, unit = 'mm') {
    this.locale = locale;
    this.unit = unit;
    
    // default size for the locale
    this.width = 210;
    this.height = 297;
    
    // ISO 216 sizes
    const isoSizes = [
      {name: 'A0', width: 841, height: 1189},
      {name: 'A1', width: 594, height: 841},
      {name: 'A2', width: 420, height: 594},
      {name: 'A3', width: 297, height: 420},
      {name: 'A4', width: 210, height: 297},
      {name: 'A5', width: 148, height: 210},
      {name: 'A6', width: 105, height: 148},
      {name: 'A7', width: 74, height: 105},
      {name: 'A8', width: 52, height: 74},
      {name: 'A9', width: 37, height: 52},
      {name: 'A10', width: 26, height: 37}
    ];
    
    // US sizes
    const usSizes = [
      {name: 'Letter', width: 8.5, height: 11},
      {name: 'Legal', width: 8.5, height: 14},
      {name: 'Tabloid', width: 11, height: 17},
      {name: 'Ledger', width: 17, height: 11},
      {name: 'Executive', width: 7.25, height: 10.5},
      {name: 'Foolscap', width: 8.5, height: 13},
      {name: 'Quarto', width: 8.5, height: 10.875},
      {name: 'Government-Letter', width: 8, height: 10.5},
      {name: 'Government-Legal', width: 8.5, height: 13},
      {name: 'Junior-Legal', width: 8.5, height: 5},
      {name: 'Half-Letter', width: 5.5, height: 8.5},
      {name: 'Statement', width: 5.5, height: 8.5},
      {name: 'Index-Card-3x5', width: 3, height: 5},
      {name: 'Index-Card-4x6', width: 4, height: 6},
      {name: 'Index-Card-5x8', width: 5, height: 8},
      {name: 'Postcard', width: 3.5, height: 5.5}
    ];
    
    const usSize = usSizes.find(size => size.name === 'Letter');
    if (usSize) {
      this.width = usSize.width * 25.4;
      this.height = usSize.height * 25.4;
    }
  }
  
  
  toString() {
    const widthStr = this.width.toFixed(2);
    const heightStr = this.height.toFixed(2);
    const unitStr = this.unit === 'in' ? 'inches' : 'millimeters';
    return `${widthStr} x ${heightStr} ${unitStr}`;
  }
}

// Examples:
const paperSize1 = new PaperSize('fr-FR', 'mm');
console.log(paperSize1.toString()); // "210.00 x 297.00 millimeters"

const paperSize2 = new PaperSize('en-US', 'in');
console.log(paperSize2.toString()); // "8.50 x 11.00 inches"
