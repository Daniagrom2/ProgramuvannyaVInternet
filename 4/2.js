let defaults = {
  mode: 'test',
  debugLevel: 'error',
  logFolder: 'root'
};

let userSetting = {
  mode: 'production',
  debugLevel: 'trace'
};

// solution 1: using spread operator
function mergeSettings(defaults, userSetting) {
  return { ...defaults, ...userSetting };
}

// solution 2: using Object.assign method
function mergeSettings(defaults, userSetting) {
  return Object.assign({}, defaults, userSetting);
}

// solution 3: using for..in loop
function mergeSettings(defaults, userSetting) {
  let result = {};

  for (let key in defaults) {
    result[key] = userSetting.hasOwnProperty(key) ? userSetting[key] : defaults[key];
  }

  return result;
}

console.log(mergeSettings(defaults, userSetting));
