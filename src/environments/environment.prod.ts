export const environment = {
  production: true,
  apiUrl: 'https://ufg-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('ufg-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
