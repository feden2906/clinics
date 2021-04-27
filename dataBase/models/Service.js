const DataTypes = require('sequelize');

module.exports = (client) => {
  const Service = client.define(
    'Service',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'services',
      timestamps: false
    }
  );

  return Service;
};
