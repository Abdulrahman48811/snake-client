let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log('EXITING');
    process.exit();
  }
  if (data === 'w') connection.write('Move: up');
  if (data === 'a') connection.write('Move: left');
  if (data === 'd') connection.write('Move: right');
  if (data === 's') connection.write('Move: down');

  if (data === '1') connection.write('Say: Catch me Haha');
  if (data === '2') connection.write('Say: I want to speed up');
  if (data === '3') connection.write('Say: HAHAHA');
  if (data === '4') connection.write('Say: GO Faster');
};



module.exports = { setupInput };