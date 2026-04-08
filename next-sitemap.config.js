/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://carpenterstudio.co',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
