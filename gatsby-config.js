// Environmental variables
require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Decide Together`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // TEST
        //baseUrl: `http://api.mghda.dr809.test`,
        // DEV
        baseUrl: process.env.DRUPAL_API_URL,
        // STAGE
        //baseUrl: `http://api.mghda.hccstaging.org`,
        // PROD
        //baseUrl: `https://api.mghcancergeneticsda.com`,
        basicAuth: {
          username: process.env.DRUPAL_AUTH_USERNAME,
          password: process.env.DRUPAL_AUTH_PASSWORD
        },
        languageConfig: {
          defaultLanguage: `en`,
          enabledLanguages: [`en`, `es`],
          translatableEntities: [
            `node--page` 
          ],
          nonTranslatableEntities: [`file--file`],
        }
      }
    }
  ]
};
