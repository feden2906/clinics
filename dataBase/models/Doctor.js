const DataTypes = require('sequelize');

module.exports = (client) => {
  const Doctor = client.define(
    'Doctor',
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
      tableName: 'doctors',
      timestamps: false
    }
  );

  return Doctor;
};
