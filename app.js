import "dotenv/config";
import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import partials from 'express-partials';
import homeRoutes from './routes/homeRoutes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { loginController, signupController } from "./controllers/authController.js";
import { categoriesController, studioController, videosController } from "./controllers/pageController.js";

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('views', path.join(path.resolve(), 'views'));
app.use(partials());
app.set('view engine', 'ejs');
app.use(express.static(path.join(path.resolve(), 'dist')));

app.get('/login', authMiddleware, loginController);

app.get('/signup', authMiddleware, signupController);

app.get('/categories/:category/channels', authMiddleware, categoriesController);

app.get('/studio/:task', authMiddleware, studioController);

app.get('/videos', authMiddleware, videosController);

app.use('/', authMiddleware, homeRoutes);

app.listen(PORT, () => {
    console.log(`SupplyStream running on port ${PORT}\n`);
});

export default app;