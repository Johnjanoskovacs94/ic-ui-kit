const { exec } = require('child_process');
const waitOn = require('wait-on');
const kill = require('cross-port-killer');

const runLighthouse = (url) => {
  return new Promise((resolve, reject) => {
    exec(`lighthouse ${url} --only-categories=performance --no-error-reporting`, (error, stdout, stderr) => {
      if (error) {
          reject(`Error ${error.message}`)
      }
      if (stderr) {
          console.error(`stderr: ${stderr}`)
      }
      console.log(`stdout ${stdout}`);
      resolve();
    })
  })
};

const main = async () => {
  try {
    await waitOn({ resources: ['http://localhost:3000']});
    await runLighthouse('http://localhost:3000');
  } catch (error) {
    console.error(error);
  } finally {
    await kill.kill(3000);
    console.log('Server stopped');
  }
};

main();