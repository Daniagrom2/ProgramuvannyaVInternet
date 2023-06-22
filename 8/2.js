function printNumber(num) {
  const options = {useGrouping: false};
  const enNum = new Intl.NumberFormat('en', options).format(num);
  const arNum = new Intl.NumberFormat('ar', options).format(num);
  const thNum = new Intl.NumberFormat('th', options).format(num);
  
  console.log(`English: ${enNum}`);
  console.log(`Arabic: ${arNum}`);
  console.log(`Thai: ${thNum}`);
}
