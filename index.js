const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); 

app.get("/api/users", (req, res) => {
  var lifespan = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
  
  res.status(200).send(lifespan);
});

app.listen(4000, () => console.log("Server running on 4000"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/movies', function(req, res) {
  switch (req.body.movies) {
    case 'CANADA':  
      res.status(200).send("Life expectancy in Canada: 82.96 <br> Life expectancy in Canada for Females : 84.96 <br> Life expectancy in Canada for Males: 81.96 <br> ");
      break;
    case 'USA':
      res.status(200).send("Life expectancy in USA: 89.96 <br> Life expectancy in USA for Females : 89.96 <br> Life expectancy in USA for Males: 88.96 <br> ");
      break;
      case 'UK':
      res.status(200).send("Life expectancy in UK: 89.96 <br> Life expectancy in UK for Females : 89.96 <br> Life expectancy in UK for Males: 88.96 <br> ");
      break;
      case 'JAPAN':
        res.status(200).send("Life expectancy in JAPAN: 89.96 <br> Life expectancy in JAPAN for Females : 89.96 <br> Life expectancy in JAPAN for Males: 88.96 <br> ");
        break;
    case 'INDIA':
      res.status(200).send("Life expectancy in INDIA: 89.96 <br> Life expectancy in INDIA for Females : 89.96 <br> Life expectancy in INDIA for Males: 88.96 <br> ");
      break;
      case 'FRANCE':
        res.status(200).send("Life expectancy in FRANCE: 89.96 <br> Life expectancy in FRANCE for Females : 89.96 <br> Life expectancy in FRANCE for Males: 88.96 <br> ");
        break;
      case 'GERMANY':
        res.status(200).send("Life expectancy in GERMANY: 89.96 <br> Life expectancy in GERMANY for Females : 89.96 <br> Life expectancy in GERMANY for Males: 88.96 <br> ");
        break;
        case 'NZ':
          res.status(200).send("Life expectancy in NZ: 89.96 <br> Life expectancy in NZ for Females : 89.96 <br> Life expectancy in NZ for Males: 88.96 <br> ");
          break;
        case 'MEXICO':
          res.status(200).send("Life expectancy in MEXICO: 89.96 <br> Life expectancy in MEXICO for Females : 89.96 <br> Life expectancy in MEXICO for Males: 88.96 <br> ");
          break;
      case 'NORWAY':
        res.status(200).send("Life expectancy in NORWAY: 89.96 <br> Life expectancy in NORWAY for Females : 89.96 <br> Life expectancy in NORWAY for Males: 88.96 <br> ");
        break;
        case 'DENMARK':
          res.status(200).send("Life expectancy in DENMARK: 89.96 <br> Life expectancy in DENMARK for Females : 89.96 <br> Life expectancy in DENMARK for Males: 88.96 <br> ");
          break;

    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
})
app.listen(8070, function() {
  console.log('Server running at http://127.0.0.1:8070/');
});










