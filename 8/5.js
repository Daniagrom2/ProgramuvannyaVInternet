function messageFormat(template, ...args) {
  const options = {style: 'long'};
  const listFormatter = new Intl.ListFormat(undefined, options);
  
  const placeholders = template.match(/{\d+}/g);
  
  let message = template;
  placeholders.forEach((placeholder, index) => {
    const value = args[index];
    const valueString = typeof value === 'number'
      ? new Intl.NumberFormat(undefined).format(value)
      : value;
      
    message = message.replace(placeholder, valueString);
  });
  
  const messageParts = message.split(' ');
  const names = messageParts.filter(part => placeholders.includes(`{${messageParts.indexOf(part)}}`));
  
  if (names.length > 1) {
    const nameList = listFormatter.format(names);
    message = message.replace(names[0], nameList);
  }
  
  return message;
}
console.log(messageFormat('{0} has {1} messages', 'John', 5)); // John has 5 messages
console.log(messageFormat('{0} has {1} messages', 'Jane', 1)); // Jane has 1 message
console.log(messageFormat('{0} has {1} messages', 'David', 3)); // David has 3 messages
console.log(messageFormat('{0} has {1} messages', 'Marie', 0)); // Marie has 0 messages

console.log(messageFormat('{0} has {1} messages', 'John and Jane', 2)); // John and Jane have 2 messages
console.log(messageFormat('{0} has {1} messages', 'John, Jane, and David', 3)); // John, Jane, and David have 3 messages
