const config = {
  siteTitle: 'Veronique Savard - HSA Journal 2020/2021', // Site title.
  siteTitleShort: 'VS HSA Journal', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'VS HSA Journal, DCU Open Education HDID 2020/2021', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://vero-hsa-journal.netlify.app', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A journal for the HSA module of DCU Open Education HDID', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Veronique S', // Username to display in the author segment.
  userEmail: 'veronique.savard2@mail.dcu.ie', // Email used for RSS feed's author segment
  userTwitter: 'bottleofbeetles', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'nuagesdencre', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'Dublin, Ireland', // User location to display in the author segment.
  userAvatar: 'verobw.png', // User avatar to display in the author segment.
  userDescription:
    "VS is a HDID student and a software developer.", // User description to display in the author segment.
  copyright: 'Copyright VSQ © 2021. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
