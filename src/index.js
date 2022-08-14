import app from './app';

// * Start the server in the port defined in the config file
const main = () => {
  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
};

// * Run the server 
main();
