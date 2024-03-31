import "dotenv/config";

const baseUrl = `http://localhost:${process.env.PORT}`;

const loginController = async (req, res) => {
    res.render('pages/login', {
        layout: 'partials/layout',
        baseUrl,
    });
}

const signupController = async (req, res) => {
    res.render('pages/signup', {
        layout: 'partials/layout',
        baseUrl
    });
}

export { loginController, signupController };