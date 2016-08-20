var express       = require('express');
var app           = express();
var morgan = require('morgan');
var request = require("request");


app.use(morgan('tiny'));

app.listen(3000, function(){
  console.log('listening on port '+ 3000);
});

app.use(express.static('public'));

app.get('/status',function(req,res){
  console.log(req.body);
  urli='http://drivepal.mybluemix.net';
    request({
        url: urli,
        timeout: 1500,
        method: 'GET'
    }, function (error, response, body) {
      // console.log(response.statusCode);
        if(error) {console.log(error); res.send(true);}
        else if ( response.statusCode === 200) { res.send(false);} //not down
        else {
          res.send(true);
        }

  });
})
