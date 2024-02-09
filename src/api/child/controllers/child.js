'use strict';

/**
 * child controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::child.child');

// module.exports = createCoreController('api::child.child', ({strapi}) => ({
//     async create(ctx) {
//         const child = ctx.request.body;
//         child.data.user = ctx.state.user.id;
//         const entity = await strapi
//             .service("api::child.child")
//             .create(child);
//         ctx.body = await this.sanitizeOutput(entity, ctx);
//     },
//
//     async find(ctx) {
//         let query = {...ctx.query};
//         query.user = ctx.state.user.id;
//         console.log(JSON.stringify(query));
//         let entity = await strapi
//          .service("api::child.child")
//          .find(query);
//         ctx.body = await this.sanitizeOutput(entity, ctx);
//     }
// }));
