let express = require('express');
let app = express();                           //express 실행
let router = require('./router/main')(app);    //router 폴더에서 main 실행
let port = process.env.PORT || 3000;           //포트번호

app.set('views', __dirname + '/views');        //html폴더에는 html이 있음
app.set('view engine', 'ejs');         
app.engine('html', require('ejs').renderFile); //html과 ejs 둘다 사용가능
app.use(express.static('public'));             // css, js, 그림파일 등을 이곳에 지정 

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
