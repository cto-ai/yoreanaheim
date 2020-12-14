'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'publications',
          'about_excerpt',
          {
            type: Sequelize.TEXT,
            allowNull: true
          }, { transaction: t }),
        queryInterface.addColumn(
          'publications',
          'about',
          {
            type: Sequelize.TEXT,
            allowNull: true
          }, { transaction: t })
      ])
    })
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('publications', 'about_excerpt'),
      queryInterface.removeColumn('publications', 'about')
    ];
  }
};
