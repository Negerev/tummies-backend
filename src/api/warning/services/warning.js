'use strict';

/**
 * warning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::warning.warning');
