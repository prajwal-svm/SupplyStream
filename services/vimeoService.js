const { logToFile } = require('../utils/logger');

const Vimeo = require('vimeo').Vimeo;

class VimeoService {
    constructor() {
        this.client = new Vimeo(
            process.env.VIMEO_CLIENT_ID,
            process.env.VIMEO_ACCESS_TOKEN,
            process.env.VIMEO_CLIENT_SECRET
        );
    }

    async getCategories() {
        try {
            const response = await new Promise((resolve, reject) => {
                this.client.request({
                    method: 'GET',
                    path: '/categories'
                }, function (error, body) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                });
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch categories: ${error.message}`);
        }
    }

    async getCategoryChannels(categoryUri, page = 1, perPage = 8, sort = 'followers', direction = 'desc') {
        try {
            const response = await new Promise((resolve, reject) => {
                this.client.request({
                    method: 'GET',
                    path: `${categoryUri}/channels?page=${page}&per_page=${perPage}&sort=${sort}&direction=${direction}`
                }, function (error, body) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                });
            });
            // logToFile(response);
            return {
                channels: response.data,
                paging: response.paging
            };
        } catch (error) {
            throw new Error(`Failed to fetch category channels: ${error.message}`);
        }
    }
}

module.exports = new VimeoService();
