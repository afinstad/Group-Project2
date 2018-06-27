module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    // Giving the Review model reviewer, rating (we can decide a system), and comment area
    reviewer_name: DataTypes.STRING,
    rating: DataTypes.STRING,
    comment: DataTypes.TEXT
  });

  Review.associate = function (models) {
    // Associating Review with Items
    Review.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};