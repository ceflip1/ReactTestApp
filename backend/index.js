import express from 'express';
import cors  from 'cors';
import bodyParser from 'body-parser';
import FileRouter from "./src/route/FileRouter.js";

let app = express();
app.disable("x-powered-by");

//setting
app.set('port',  4000);


//middlewares
 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));

// routes 
app.use('/file', FileRouter);

app.get('/', (req, res) => res.status(200).send({
    message: "welcome to fullstack test"
}));
 
app.listen(app.get('port'), () => {
    console.log("server on port ", `${app.get('port')}`);
});
export default app;