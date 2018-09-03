
// import everything from express and assign it to the express variable
import express from 'express';

// import all the controllers. If you add a new controller, make sure to import it here as well.
import {WelcomeController, WeatherController} from './controllers';

// create a new express application instance
const app: express.Application = express();

// define the port the express app will listen on
var port: number = 3000;
if(process.env.PORT !== undefined){
	port = parseInt(process.env.PORT)
}

// mount the WelcomeController at the /welcome route. See welcome.controller.ts for more information.
app.use('/welcome', WelcomeController);

// mount the WelcomeController at the /welcome route. See weather.controller.ts for more information.
app.use('/weather', WeatherController);

// start serving the application on the given port
app.listen(port, () => {
    // success callback, log something to console as soon as the application has started
    console.log(`Listening at http://localhost:${port}/`);
});
