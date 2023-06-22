const LOG_LEVELS = {
  ERROR: 0,
  WARNING: 1,
  INFO: 2,
  DEBUG: 3
};

let logLevel = LOG_LEVELS.INFO;

function log(level, message) {
  if (level <= logLevel) {
    console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
  }
}

function setLogLevel(level) {
  logLevel = level;
}

export { log, LOG_LEVELS, setLogLevel };
