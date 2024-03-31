# SupplyStream

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/f2f2d4d5-8e2d-4240-9708-ee2721e37980)

SupplyStream is a simple platform that allows users to consume, upload, import, create and record media content. Powered by Vimeo API.

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/a3f0518c-3d4b-4888-b21e-07a169ad007e)

## Overview

[Live Demo](https://supplystream.prajwalsv.dev)

This project was developed as part of the Full Stack Engineering Internship Challenge 2024 at Supplyframe. The challenge required building a multiple-page web app that displays information pulled from a free API. I chose to use the Vimeo API to fetch video data and display it on the platform.

The specific requirements for the challenge were as follows:

- [x] Use Node.js with Express and EJS templates.
- [x] Host all client-side assets (stylesheets, images, JavaScripts, etc.) locally, served from the repository/site.
- [x] Use Bootstrap or Tailwind CSS for styling.
- [x] Use jQuery or Vanilla JavaScript for client-side interactions (no React, Vue, or other JS frameworks).
- [x] Implement Git version control and push the repository to GitHub.
- [x] Write at least one Jest test.

## Tech Stack

- Backend:
  - Node.js
  - Express
  - EJS
  - Cookie Parser
  - Body Parser
  - Clerk SDK
  - Vimeo API

- Frontend:
  - Tailwind CSS
  - PostCSS
  - Autoprefixer

- Testing:
  - Jest
  - Supertest

- Development Tools:
  - Babel
  - Nodemon
  - dotenv

## Features

What's currently supported?

- **Home Page**: Displays a list of featured channels and categories.
- **Search**: Allows users to search for videos via keywords.
- **Categories**: Displays a list of categories and channels.
- **Studio**: Allows users to upload, import, create and record media content (client only).
- **Authentication**: Allows users to sign up and log in to the platform.
- **Pagination:** Supports paginated results for on all API requests.

> Note: VIMEO API has a rate limit of 25 requests per min. If the limit is reached, the application will stop fetching data from the API which may result in incomplete data being displayed or an error message. In such cases please wait for a minute and refresh the page.

## Installation and Setup

To run the SupplyStream application locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/supplystream.git
   ```

2. Navigate to the project directory:
   ```
   cd supplystream
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:
     ```
     PORT=3000
     VIMEO_ACCESS_TOKEN=your-vimeo-access-token
     ```
   - Replace `your-vimeo-access-token` with your actual Vimeo API access token.

5. Build the Tailwind CSS:
   ```
   npm run build:css
   ```

6. Start the application:
   ```
   npm start
   ```

7. Open your browser and visit `http://localhost:3000` to access the SupplyStream application.

## Running Tests

To run the tests for the SupplyStream application, use the following command:
```
npm test
```

This will execute the test suite and display the test results in the console.

## Configuration

The application uses the following configuration files:

- `babel.config.cjs`: Babel configuration file for JavaScript transpilation.
- `tailwind.config.js`: Tailwind CSS configuration file for customizing the Tailwind CSS setup.
- `postcss.config.js`: PostCSS configuration file for processing CSS files.

Make sure to review and modify these configuration files as needed for your specific requirements.

## Dependencies

The main dependencies used in the SupplyStream application are:

- Express.js: Web application framework for Node.js.
- EJS: Embedded JavaScript templating engine for rendering views.
- Tailwind CSS: Utility-first CSS framework for building custom designs.
- Vimeo API: Integration with the Vimeo API for video-related functionality.

For a complete list of dependencies, refer to the `package.json` file.

## Directory Structure

The project follows a structured directory organization. Here's an overview of the main directories and files:

- `data/`: Contains data files used in the application.
  - `categories.js`: Defines the categories data.

- `services/`: Contains service files for external API integrations.
  - `vimeoService.js`: Implements the Vimeo API service.

- `routes/`: Contains route files for handling different URL paths.
  - `homeRoutes.js`: Defines routes for the home page.

- `views/`: Contains EJS template files for rendering HTML pages.
  - `pages/`: Contains individual page templates.
    - `index.ejs`: Template for the home page.
    - `search.ejs`: Template for the search results page.
    - `categories.ejs`: Template for the categories page.
    - `studio.ejs`: Template for the studio page.
    - `signup.ejs`: Template for the signup page.
    - `login.ejs`: Template for the login page.
  - `partials/`: Contains reusable partial templates.
    - `sidebar.ejs`: Template for the sidebar component.
    - `layout.ejs`: Base layout template.
    - `channels.ejs`: Template for displaying channels.
    - `header.ejs`: Template for the header component.
    - `categories.ejs`: Template for displaying categories.

- `tests/`: Contains test files for the application.
  - `routes.test.js`: Contains tests for the route handlers.

- `controllers/`: Contains controller files for handling business logic.
  - `pageController.js`: Controller for handling page-related logic.
  - `homeController.js`: Controller for handling home page logic.
  - `authController.js`: Controller for handling authentication logic.

- `utils/`: Contains utility files and helper functions.
  - `helpers.js`: Contains helper functions used throughout the application.
  - `logger.js`: Contains logging utility functions.

- `public/`: Contains publicly accessible static files.
  - `styles/`: Contains CSS files.
    - `tailwind.css`: Tailwind CSS file.
    - `style.css`: Custom CSS file.
  - `js/`: Contains JavaScript files.
    - `category-channels.js`: JavaScript file for handling category channels.
  - `images/`: Contains image files used in the application.
    - `icons8-stream-96.png`: Stream icon image (96x96).
    - `icons8-stream-48.png`: Stream icon image (48x48).
    - `icons8-stream-24.png`: Stream icon image (24x24).

- `middlewares/`: Contains middleware files.
  - `authMiddleware.js`: Middleware for handling authentication.

- `app.js`: The main application file.


Here's the complete directory structure:

```
.
|____package-lock.json
|____data
| |____categories.js
|____services
| |____vimeoService.js
|____routes
| |____homeRoutes.js
|____babel.config.cjs
|____.gitignore
|____views
| |____pages
| | |____index.ejs
| | |____search.ejs
| | |____categories.ejs
| | |____studio.ejs
| | |____signup.ejs
| | |____login.ejs
| |____partials
| | |____sidebar.ejs
| | |____layout.ejs
| | |____channels.ejs
| | |____header.ejs
| | |____categories.ejs
|____package.json
|____tests
| |____routes.test.js
|____README.md
|____tailwind.config.js
|____postcss.config.js
|____controllers
| |____pageController.js
| |____homeController.js
| |____authController.js
|____utils
| |____helpers.js
| |____logger.js
|____public
| |____styles
| | |____tailwind.css
| | |____style.css
| |____js
| | |____category-channels.js
| |____images
| | |____icons8-stream-96.png
| | |____icons8-stream-48.png
| | |____icons8-stream-24.png
|____app.js
|____middlewares
| |____authMiddleware.js
|____.env

```

## Screenshots

#### Login using Clerk
![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/9b0f19f8-fb1f-4ffc-ad19-c7b599c775d9)

#### Signup using Clerk

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/2b3e46ba-3b46-4cf9-9bfa-1d7148adc200)

#### Home Page

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/65dd07f9-47c0-4563-a330-e968e92c9608)

### Channels Page

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/edc35375-2893-451a-aa4f-97367e38b78a)

### Search Results

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/67cef839-6f40-4ed6-b75a-d2e66223d99b)

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/a3f0518c-3d4b-4888-b21e-07a169ad007e)

## Studio Page

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/8c5384b1-70ca-4539-911e-df9b3329af7e)

## Data and Privacy Policies 

![image](https://github.com/Prajwal-S-Venkatesh/SupplyStream/assets/53730619/53ae021a-0e84-48af-b29f-4c08e55619e1)



