const VimeoService = require('../services/vimeoService');
const { logToFile } = require('../utils/logger');

exports.getCategories = async (req, res) => {
  try {
    const categories = await VimeoService.getCategories();
    res.render('pages/index', {
      layout: 'partials/layout',
      categories,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getCategoryChannels = async (req, res) => {
  try {
    const { categoryUri } = req.query;

    console.log("categoryUri:", categoryUri);

    if (!categoryUri) {
      return res.status(400).send('Category URI is required');
    }

    const data = await VimeoService.getCategoryChannels(categoryUri);
    // logToFile(data);
    res.json(data?.channels);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send('Internal Server Error');
  }
};
