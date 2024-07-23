'use strict';

/**
 * manga-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manga-list.manga-list');
