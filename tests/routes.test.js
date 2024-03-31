const request = require('supertest');
const app = require('../app.js').default;
const categories = require('../data/categories.js').default;

const protectedRoutes = [
    '/',
    '/categories/travel/channels',
    '/studio/upload',
    '/videos'
];

const authRoutes = [
    '/login',
    '/signup',
];

describe('API Endpoints', () => {
    // Un-Authenticated Access to the protected pages
    for (const route of protectedRoutes) {
        describe(`GET ${route}`, () => {
            it(`Un-authenticated access to "${route}" should redirect to the login page`, async () => {
                const res = await request(app).get(route);
                // Must redirect to the login page with 302 status code
                expect(res.statusCode).toEqual(302);
                expect(res.text).toContain('Redirecting to /login');
            });
        });
    }

    const cookie = '__client_uat=1711848839; __clerk_db_jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMlR6ZzBzODltZ0syelh5dVMyUjhGbVN0eGlvIiwiaWQiOiJjbGllbnRfMmVRdGx2bGxJaFFlQWFlMGJsQTdQT1lMcmNmIiwicm90YXRpbmdfdG9rZW4iOiJmaGllZ2dlZG1kM2J4bjBjdm0wbmwxeWZjY3Nyems4cTJhaTVvMmlzIn0.AuKo-xWekPj6dq9F0PCq5dO-_g1s3_4fyrpY7qOEDPvQNuH_bI7UzQrIuh6lbP11kg7PpSmFgl60En4yo-nTjPO-D6iSe1SVM8Sg2X4MxOcdfWAcHIOVvZsYm68ZDhq_4VG1LGf_GO4gcOt2GYdi2mlwMoWR0Pgiu_y8utJbWtTjUPx-PYxyp82r5riGRVQV9L8evbkmYBp6tOFmfCd53rAUSshkEUdjxUnrCywxZX5puWHxBEmvG57lRPXFEzNj0vhnIUOh0ZMYnO-bnqAw-lShsuOQrE1YqUFvIevyy6xjsLS-TvWY7UCdTks3Sd2UbnQH2cijXOQ47fiflq9Miw; __session=eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsIm';

    // Authenticated Access to the protected pages
    for (const route of protectedRoutes) {
        describe(`GET ${route}`, () => {
            it(`Authenticated access to "${route}" should render the page without any re-directs`, async () => {

                const res = await request(app)
                    .get(route)
                    .set('Cookie', cookie)
                    .timeout(20000);

                expect(res.statusCode).toEqual(200);
                expect(res.text).toContain('CATEGORIES');
            }, 20000);
        });
    }

    // Authenticated Access to the auth pages
    for (const route of authRoutes) {
        describe(`GET ${route}`, () => {
            it(`Authenticated access to "${route}" should redirect to home page`, async () => {
                const res = await request(app)
                    .get(route)
                    .set('Cookie', cookie)
                    .timeout(10000);

                // Must redirect to the home page with 302 status code
                expect(res.statusCode).toEqual(302);
                expect(res.text).toContain('Redirecting to /');
            });
        });
    }

    // Authenticated Access to the home page
    describe(`GET /`, () => {
        it(`Authenticated access to "/" should render the page as expected`, async () => {
            const res = await request(app)
                .get('/')
                .set('Cookie', cookie)
                .timeout(10000);

            // Must redirect to the home page with 302 status code
            expect(res.statusCode).toEqual(200);
            expect(res.text).toContain('SupplyStream');
            expect(res.text).toContain('STUDIO');
            expect(res.text).toContain('Upload');
            expect(res.text).toContain('Import');
            expect(res.text).toContain('Create');
            expect(res.text).toContain('Record');

            expect(res.text).toContain('CATEGORIES');
            for (const category of categories) {
                expect(res.text).toContain(category.name);
            }

            for (const category of categories) {
                expect(res.text).toContain(`data-category-uri=\"${category.uri}\"`);
            }

            expect(res.text).toContain("Search");
        });
    });

    // Authenticated Access to the search videos page
    describe(`GET /videos?query=code`, () => {
        it(`Authenticated access to "/videos?query=code" should render the page as expected`, async () => {
            const res = await request(app)
                .get('/videos?query=code')
                .set('Cookie', cookie)
                .timeout(10000);

            // Must redirect to the home page with 302 status code
            expect(res.statusCode).toEqual(200);
            expect(res.text).toContain('SupplyStream');
            expect(res.text).toContain('STUDIO');
            expect(res.text).toContain('Upload');
            expect(res.text).toContain('Import');
            expect(res.text).toContain('Create');
            expect(res.text).toContain('Record');

            expect(res.text).toContain('CATEGORIES');
            for (const category of categories) {
                expect(res.text).toContain(category.name);
            }

            expect(res.text).toContain("Home");
            expect(res.text).toContain("Search");
            expect(res.text).toContain(`Results for`);
            expect(res.text).toContain(`"code"`);
        });
    });
});
