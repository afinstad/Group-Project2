module.exports = function (sequelize, DataTypes) {
    var Size = sequelize.define("Review", {
      // Giving the Review model reviewer, rating (we can decide a system), and comment area
      size: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    });
  
    // Size.associate = function (models) {
    //   // Associating Size with Product
    //   Size.belongsTo(models.Product, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Size;
  };