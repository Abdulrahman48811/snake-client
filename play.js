const net = require("net");
const connect = function () {
const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
});
  return conn;
};
console.log("Connecting ...");
const conn = connect();

  // interpret incoming data as text
  conn.on('connect', () => {
    console.log("Successfully connected to the the server")

  });
    
  conn.on('connect', () => {
    conn.write("Name : Abdulrahman");
  });

  conn.on('data', (data) => {
    console.log(data);
  });



  conn.setEncoding("utf8");
// return conn;
