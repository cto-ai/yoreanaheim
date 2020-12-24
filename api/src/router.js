'use strict';

const Router = require('@koa/router');
import routes from './routes';

const models = require('../models');
const sequelize = require('sequelize');

const router = new Router();
// sample - basic routing
router.get('/api/publications', routes.publication.list);
router.get('/api/publication/sumPages', (ctx, next) => { routes.publication.sumPages(ctx) });
router.get(
    '/api/publication/sumPages',
    (ctx, next) => {
        console.log("Model", models)
        return models.edition.findOne({
            attributes: [
                [models.sequelize.fn('sum', models.sequelize.col('pages')), 'sumPages']
            ]
        }).then(function (result) {
            console.log("Resulto", result)
            ctx.user = result;
            next();
        });
    },
    ctx => {
        console.log(ctx.user);
        // => { id: 17, name: "Alex" }
    }
);
router.get('/api/publication/:id/page/:page', routes.publication.get);
router.get('/api/publication/:id/year/:year', routes.publication.get);
router.get('/api/publication/:id/year/:year/month/:month', routes.publication.get);
router.get('/api/publication/:id/years', routes.publication.years);

module.exports = router;
