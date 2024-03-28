require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const partials = require('express-partials');
const homeRoutes = require('./routes/homeRoutes');
const vimeoService = require('./services/vimeoService');

const PORT = process.env.PORT || 3000;
const baseUrl = `http://localhost:${PORT}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.use(partials());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));

const categories = [
    {
        name: 'Ads and Commercials',
        uri: '/categories/adsandcommercials'
    },
    {
        name: 'Animation',
        uri: '/categories/animation'
    },
    {
        name: 'Branded Content',
        uri: '/categories/brandedcontent'
    },
    {
        name: 'Comedy',
        uri: '/categories/comedy'
    },
    {
        name: 'Documentary',
        uri: '/categories/documentary'
    },
    {
        name: 'Experimental',
        uri: '/categories/experimental'
    },
    {
        name: 'Music',
        uri: '/categories/music'
    },
    {
        name: 'Narrative',
        uri: '/categories/narrative'
    },
    {
        name: 'Sports',
        uri: '/categories/sports'
    },
    {
        name: 'Travel',
        uri: '/categories/travel'
    }
]

app.use('/', homeRoutes);

app.get('/categories/:category/channels', (req, res) => {
    const { page, per_page, sort, direction } = req.query || {};
    vimeoService.getCategoryChannels(`/categories/${req.params.category}`, page, per_page, sort, direction).then((data) => {
        const { channels, paging } = data;
        console.log("channels:", channels);
        res.render('pages/categories', {
            layout: 'partials/layout',
            category: req.params.category,
            channels,
            paging,
            categories,
            baseUrl
        });
    }).catch((error) => {
        console.log("Error:", error);
        res.status(500).send('Internal Server Error');
    });
}
);


app.get('/studio/:task', (req, res) => {
    res.render('pages/studio', {
        layout: 'partials/layout',
        task: req.params.task,
        baseUrl,
        categories,
        type: req.params.task
    });
});

app.get('/login', (req, res) => {
    res.render('pages/login', {
        layout: 'partials/layout',
        baseUrl
    });
});

app.get('/signup', (req, res) => {
    res.render('pages/signup', {
        layout: 'partials/layout',
        baseUrl
    });
});

app.listen(PORT, () => {
    console.log(`SupplyStream running at port ${PORT}\n`);
});
