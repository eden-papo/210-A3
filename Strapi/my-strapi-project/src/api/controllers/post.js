//Eden Papo u24685349

'strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
// Populate tags on list
async find(ctx) {
ctx.query.populate = { tags: true };
return await super.find(ctx);
},

// Populate tags on single fetch
async findOne(ctx) {
ctx.query.populate = { tags: true };
return await super.findOne(ctx);
}
}));