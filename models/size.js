module.exports = function (sequelize, DataTypes) {
    var Size = sequelize.define("Review", {
      // Giving the Review model reviewer, rating (we can decide a system), and comment area
      size: DataTypes.STRING,
      quantity: DataType.INT,
    });
  
    Size.associate = function (models) {
      // Associating Review with Items
      Review.belongsTo(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Size;
  };