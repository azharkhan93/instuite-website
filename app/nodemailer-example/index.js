const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

   app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'public','about.html'))

// });
// app.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'public','about.html'))
//     })
//     app.get('/course', function(req, res){
//         res.sendFile(path.join(__dirname, 'public','courses.html'))
//         })
//         app.get('/contact', function(req, res){
//             res.sendFile(path.join(__dirname, 'public','contact.html'))
//             });

app.listen(3000);
console.log('Server on port 3000')