const VimeoService = require('../services/vimeoService');

exports.getCategories = async (req, res) => {
  try {
    const categories = await VimeoService.getCategories();
    res.render('pages/index', {
      layout: 'partials/layout',
      categories
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

    const channels = await VimeoService.getCategoryChannels(categoryUri);
    res.json(channels);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send('Internal Server Error');
  }
};
