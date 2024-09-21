// server.js
const app = require('./src/app');
// const { loadSchedules } = require('./src/utils/scheduulesData');
const port = process.env.PORT || 4040;

// // 서버 시작 시 스케줄 로드
// loadSchedules().then(()=>{
   
// }).catch((err) => {
//     console.error('스케줄 로드 중 오류가 발생했습니다. 서버가 시작되지 않습니다.', err);
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});