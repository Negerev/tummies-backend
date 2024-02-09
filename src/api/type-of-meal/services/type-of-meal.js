'use strict';

/**
 * type-of-meal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-of-meal.type-of-meal');
