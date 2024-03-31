import VimeoService from '../services/vimeoService.js';

const baseUrl = `http://localhost:${process.env.PORT}`;

export const getCategories = async (req, res) => {
  try {
    const categories = await VimeoService.getCategories();
    res.render('pages/index', {
      layout: 'partials/layout',
      categories,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      currentPage: 'home',
      breadcrumb: null
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send('Internal Server Error');
  }
};

export const getCategoryChannels = async (req, res) => {
  try {
    const { categoryUri } = req.query;

    if (!categoryUri) {
      return res.status(400).send('Category URI is required');
    }

    const data = await VimeoService.getCategoryChannels(categoryUri);
    // logToFile(data);
    res.json(data?.channels);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send(error.message || 'Internal Server Error');
  }
};
