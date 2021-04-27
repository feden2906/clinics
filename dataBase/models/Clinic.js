const DataTypes = require('sequelize');

module.exports = (client) => {
  const Clinic = client.define(
    'Clinic',
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
    },
    {
      tableName: 'clinics',
      timestamps: false
    }
  );

  return Clinic;
};
