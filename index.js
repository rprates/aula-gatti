var express = require('express');
var app = express();

app.get('/student-info', function (req, res) {
  
  var result = '{ "nome" : "Rodrigo", "faculdade" : "BandTec", "aula" : "Engenharia de software", "professor" : "Gatti" }';
  
  res.send(result);

});

app.get('/user-info', function (req, res) {

  var result = '';
  
  if(req.query.id==1) {

  	result = '{"nome":"Pedro Padilha", "faculdade":"BandTec", "aula": "Banco de dados", "professor": "Lucia"}';

  } else if(req.query.id==2) {

	result = '{"nome":"Mateus Larubia", "faculdade":"BandTec", "aula": "Analise de sistemas", "professor": "Poyatos"}';

  } else {

  	res.status(404);  	

  }
  
  res.send(result);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});