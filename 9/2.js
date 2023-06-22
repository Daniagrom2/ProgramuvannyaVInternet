export default class Logger {
  static LOG_LEVELS = {
    ERROR: 0,
    WARNING: 1,
    INFO: 2,
    DEBUG: 3
  };

  static logLevel = Logger.LOG_LEVELS.INFO;

  static log(level, message) {
    if (level <= Logger.logLevel) {
      console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
    }
  }

  static setLogLevel(level) {
    Logger.logLevel = level;
  }
}
