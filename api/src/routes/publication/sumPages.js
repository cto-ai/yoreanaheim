'use strict';

var models = require('../../../models');
var sequelize = require('sequelize');

module.exports = async (ctx) => {
	var result = {};

	result = await models.edition.findOne({
		attributes: [
			[models.sequelize.fn('sum', models.sequelize.col('pages')), 'sumPages']
		]
	});

	console.log("Test")
	ctx.body = result;
}
