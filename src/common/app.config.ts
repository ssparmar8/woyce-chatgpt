/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Woyce ChatGPT',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Woyce ChatGPT',
  },
  Meta: {
    Description: 'Leading open-source AI web interface to help you learn, think, and do. AI personas, superior privacy, advanced features, and fun UX.',
    SiteName: 'Woyce ChatGPT | Harnessing AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '',
  },
  URIs: {
    Home: '',
    // App: 'https://get.big-agi.com',
    CardImage: '',
    OpenRepo: '',
    OpenProject: '',
    SupportInvite: '',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: '',
  },
};