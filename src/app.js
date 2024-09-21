// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const booksRoutes = require('./routers/booksRoutes');
const bibleRoutes = require('./routers/bibleRoutes');
const formRoutes = require('./routers/formRoutes');
const pamphletsBookletsRoutes = require('./routers/pamphletsBookletsRoutes');
const tractsRoutes = require('./routers/tractsRoutes');
const videoDvdRoutes = require('./routers/videoDvdRoutes');
const booksLargeSizeEditionRoutes = require('./routers/booksLargeSizeEditionRoutes');
const bookRequestsRoutes = require('./routers/bookRequestsRoutes');


const app = express();
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 정적 파일 제공

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// 스케줄 관련 라우트 사용
 app.use('/api', booksRoutes);
 app.use('/api', bibleRoutes);
 app.use('/api', formRoutes);
 app.use('/api', pamphletsBookletsRoutes);
 app.use('/api', tractsRoutes);
 app.use('/api', videoDvdRoutes);
 app.use('/api', booksLargeSizeEditionRoutes);
 app.use('/api', bookRequestsRoutes);


module.exports = app;