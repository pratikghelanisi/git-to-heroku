const  express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.json({
    status:200,
    message:"Welcome Pratik Ghelani"
 });
})

app.get('/user-list', (req, res) => {
    const data = [{
        "id": 1,
        "first_name": "Fayth",
        "last_name": "Bedson",
        "email": "fbedson0@japanpost.jp"
      }, {
        "id": 2,
        "first_name": "Mick",
        "last_name": "Bench",
        "email": "mbench1@t-online.de"
      }, {
        "id": 3,
        "first_name": "Sharlene",
        "last_name": "Jellett",
        "email": "sjellett2@last.fm"
      }];

      res.json({
        status:200,
        data
     });
})

app.get('/user', (req, res) => {
  const data = [{
      "id": 1,
      "first_name": "PRATIK",
      "last_name": "GHELANI",
      "email": "pratikghelani86@gmail.com"
    }];
    res.json({
      status:200,
      data
   });
})


app.get('/demo', (req, res) => {
  const data = [{
        demo:"demo"
      }];

    res.json({
      status:200,
      data
   }); 
})

app.listen(port, () => console.log(`User module listening on port ${port}!`))
