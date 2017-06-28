//
//
// var mysql = require("mysql");
//
// // First you need to create a connection to the db
// var con = mysql.createConnection({
//   host: "badrecipebot.db.10111214.hostedresource.com",
//   user: "badrecipebot",
//   password: "blueBlue1!",
//   database: "badrecipebot"
// });
//
//
// con.connect();
//
//
// var addOneto = function(name) {
//   con.query('UPDATE frankocean SET vote = vote + 1 WHERE songs = "' + name + '"',function(err){
//     if(err) throw err;
//   });
// }
//
// var getFrankOcean = function() {
//   con.query('SELECT * FROM frankocean',function(err,rows){
//     if(err) throw err;
//     console.log('Data received from Db:\n');
//     console.log(rows);
//
//   });
// }
//
// var getFrankOceanDesc = function() {
//   con.query('SELECT*FROM frankocean ORDER BY vote DESC;',function(err,rows){
//     if(err) throw err;
//     console.log(rows);
//   });
// }
//
//
// addOneto("nikes");
// getFrankOceanDesc();
//
// con.end(function(err) {});
