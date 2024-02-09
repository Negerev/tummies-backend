'use strict';

/**
 * day-of-the-week service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::day-of-the-week.day-of-the-week');
