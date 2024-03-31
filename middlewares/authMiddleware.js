import { parseJwt } from "../utils/helpers.js";

const authMiddleware = async (req, res, next) => {
    try {
        const { __clerk_db_jwt } = req.cookies || {};

        const { id: clientId } = parseJwt(__clerk_db_jwt) || {};

        const isAuthenticated = !!clientId;

        if (req.path == '/login' || req.path == '/signup') {
            if (isAuthenticated) {
                return res.redirect('/');
            }

            return next();
        }

        if (!isAuthenticated) {
            return res.redirect('/login');
        }

        next();
    } catch (error) {
        console.log("authMiddleware - Error:", error);
        res.status(500).send('Internal Server Error');
    }
};

export { authMiddleware };