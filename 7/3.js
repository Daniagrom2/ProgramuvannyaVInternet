function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

// Приклад використання
async function test() {
  console.log('start');
  await sleep(2000);
  console.log('end');
}

test();
