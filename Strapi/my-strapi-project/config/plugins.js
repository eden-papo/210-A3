//Eden Papo u24685349

module.exports = ({ env }) => ({
// Allow Nuxt frontend to fetch Strapi data
cors: {
enabled: true,
origin: [ 'http://localhost:3000' ],
},
});