

//引用 nodemailer
var nodemailer = require('nodemailer');

var fs = require("fs");
var htmlcode = "";


//宣告發信物件
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'coryma@gmail.com',
        pass: 'xxxxxxxx'
    }
});

fs.readFile("assets/boreportemail.html", function (err, data) {
    if (err) throw err;
    htmlcode = data.toString();

    var options = {
        //寄件者
        from: 'coryma@gmail.com',
        //收件者
        to: 'coryma@tw.ibm.com, hreeds@lttmi.com', 
        //副本
        cc: 'coryma-ibm@coryma.me',
        //主旨
        subject: '正確的html', // Subject line
        //純文字
        /*text: 'Hello world2', // plaintext body*/
        //嵌入 html 的內文
        html: htmlcode,
        //附件檔案
        /*attachments: [ {
            filename: 'nyan.gif',
            path: 'assets/nyan.gif'
        }]*/
    };
    
    //發送信件方法
    transporter.sendMail(options, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('訊息發送: ' + info.response);
        }
    });
});

