const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("data.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    csvData.shift();

    
    const connection = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "csv"
    });

    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO csvs (id, timestamp, sensor_id, total) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

stream.pipe(csvStream);

