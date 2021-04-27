const DataTypes = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      'clinics',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('clinics');
  }
};
