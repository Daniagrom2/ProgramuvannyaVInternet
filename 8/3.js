function printDate() {
  const date = new Date();
  
  const frDate = date.toLocaleString('fr', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });
  
  const cnDate = date.toLocaleString('zh-Hans-CN', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });
  
  const egDate = date.toLocaleString('ar-EG', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });
  
  const thDate = date.toLocaleString('th-TH-u-nu-thai', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });
  
  console.log(`French: ${frDate}`);
  console.log(`Chinese: ${cnDate}`);
  console.log(`Egyptian: ${egDate}`);
  console.log(`Thai: ${thDate}`);
}
printDate();
