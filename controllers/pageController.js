import "dotenv/config";
import vimeoService from '../services/vimeoService.js';
import categories from '../data/categories.js';

const baseUrl = `http://localhost:${process.env.PORT}`;

const categoriesController = async (req, res) => {
    const { page, per_page, sort, direction } = req.query || {};
    vimeoService.getCategoryChannels(`/categories/${req.params.category}`, page, per_page, sort, direction).then((data) => {
        const { channels, paging } = data;
        res.render('pages/categories', {
            layout: 'partials/layout',
            category: req.params.category,
            channels,
            paging,
            categories,
            baseUrl,
            breadcrumb: {
                title: 'All Categories',
                link: '/'
            }
        });
    }).catch((error) => {
        console.log("Error:", error);
        res.status(500).send('Internal Server Error');
    });
}

const studioController = async (req, res) => {
    res.render('pages/studio', {
        layout: 'partials/layout',
        task: req.params.task,
        baseUrl,
        categories,
        type: req.params.task,
        breadcrumb: {
            title: 'Home',
            link: '/'
        }
    });
}

const videosController = async (req, res) => {
    const query = req.query.query;

    const { page, per_page, sort, direction } = req.query || {};
    vimeoService.search(query, page, per_page, sort, direction).then((data) => {
        const { videos, paging } = data;
        res.render('pages/search', {
            layout: 'partials/layout',
            query,
            videos,
            paging,
            baseUrl,
            categories,
            query,
            type: req.params.task,
            breadcrumb: {
                title: 'Home',
                link: '/'
            }
        });
    }).catch((error) => {
        console.log("Error:", error);
        res.status(500).send('Internal Server Error');
    });
}

export { categoriesController, studioController, videosController };