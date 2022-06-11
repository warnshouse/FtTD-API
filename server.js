const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(express.static('public'));
app.use(cors());

const timeShifters = {
  "lovelove": {
    "jpName": "Zabieha",
    "num": 4,
    "epDebut": "Hammerhead Rock",
    "timePd": "100 million BC"
  },
  "jitterbug": {
    "jpName": "Hanihani",
    "num": "Unknown",
    "epDebut": "Jitterbug",
    "timePd": "2nd century Japan"
  },
  "bindi": {
    "jpName": "Ammon",
    "num": "Unknown",
    "epDebut": "Bindi",
    "timePd": "15th century Transylvania"
  },
  "artie": {
    "jpName": "Horurun",
    "num": "Unknown",
    "epDebut": "Artie",
    "timePd": "19th century France"
  },
  "coconaut": {
    "jpName": "Cocoron",
    "num": 6,
    "epDebut": "Coconaut",
    "timePd": "1492 AD North Atlantic Ocean"
  },
  "plumella": {
    "jpName": "Monarisu",
    "num": 2,
    "epDebut": "Plumella",
    "timePd": "16th century Italy"
  },
  "doron": {
    "jpName": "Doron",
    "num": "Unknown",
    "epDebut": "Doron",
    "timePd": "1880 AD United States"
  },
  "notFound": {
    "jpName": '',
    "num": '',
    "epDebut": '',
    "timePd": ''
  }
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/", (req, res) => {
  res.send("Error: invalid request.");
});

app.get("/api/:name", (req, res) => {
  const timeShifterName = req.params.name.toLowerCase();

  if (timeShifters[timeShifterName]) {
    res.json(timeShifters[timeShifterName]);
  }
  else {
    res.json(timeShifters["notFound"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}.`);
});