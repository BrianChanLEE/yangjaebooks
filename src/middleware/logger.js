// const fs = require('fs');
// const path = require('path');
// const winston = require('winston');
// const cron = require('node-cron');

// // 사용자 지정 로그 레벨에 대한 색상 설정
// const customLevels = {
//   levels: {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     debug: 4,
//     db: 5,
//     sys: 6,
//   },
//   colors: {
//     error: 'red',
//     warn: 'yellow',
//     info: 'green',
//     http: 'magenta',
//     debug: 'blue',
//     db: 'cyan',
//     sys: 'grey',
//   },
// };

// winston.addColors(customLevels.colors);

// class Logger {
//   constructor(logDir) {
//     this.logger = winston.createLogger({
//       levels: customLevels.levels,
//       format: winston.format.combine(
//         winston.format.timestamp({
//           format: 'YYYY-MM-DD HH:mm:ss',
//         }),
//         winston.format.printf((info) => {
//           const koreaTime = new Date(info.timestamp);
//           koreaTime.setHours(koreaTime.getHours() + 9);
//           return `${koreaTime.toISOString().replace('T', ' ').substring(0, 19)} ${info.level}: ${info.message}`;
//         })
//       ),
//       transports: [
//         new winston.transports.File({ 
//           filename: path.join(logDir, 'app.log'), 
//           level: 'info' // 일반 로그
//         }),
//         new winston.transports.File({ 
//           filename: path.join(logDir, 'error.log'), 
//           level: 'error' // 에러 로그
//         }),
//         new winston.transports.Console({
//           format: winston.format.simple(),
//         }),
//       ],
//     });

//     // 주기적으로 로그 파일 초기화 (일반 로그: 3일마다, 에러 로그: 1달마다)
//     cron.schedule('0 0 */3 * *', () => {
//       this.resetAppLogs(logDir);
//     });

//     cron.schedule('0 0 1 * *', () => {
//       this.resetErrorLogs(logDir);
//     });
//   }
//   resetLogs(logDir) {
//     const appLogFilePath = path.join(logDir, 'app.log');
//     fs.truncate(appLogFilePath, 0, (err) => {
//       if (err) {
//         this.logger.error(`일반 로그 초기화 중 오류 발생: ${err.message}`);
//       } else {
//         this.logger.info('일반 로그 파일이 초기화되었습니다.');
//       }
//     });
//   }

//   resetErrorLogs(logDir) {
//     const errorLogFilePath = path.join(logDir, 'error.log');
//     fs.truncate(errorLogFilePath, 0, (err) => {
//       if (err) {
//         this.logger.error(`에러 로그 초기화 중 오류 발생: ${err.message}`);
//       } else {
//         this.logger.info('에러 로그 파일이 초기화되었습니다.');
//       }
//     });
//   }

//   // 로그 메서드들...
//   info(message, meta) {
//     this.logger.info(message, meta);
//   }

//   warn(message, meta) {
//     this.logger.warn(message, meta);
//   }

//   error(message, meta) {
//     this.logger.error(message, meta);
//   }

//   debug(message, meta) {
//     this.logger.debug(message, meta);
//   }

//   http(message, meta) {
//     this.logger.http(message, meta);
//   }

//   db(message, meta) {
//     this.logger.log({ level: 'db', message, meta });
//   }

//   sys(message, meta) {
//     this.logger.log({ level: 'sys', message, meta });
//   }

//   custom(level, message, meta) {
//     this.logger.log({ level, message, meta });
//   }
// }

// module.exports = Logger;


// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' })
  ]
});

module.exports = logger;