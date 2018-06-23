module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    cost: {
      type: DataTypes.INT,
      allowNull: false,
      len: [1]
    },
    quantity: {
      type: DataTypes.INT,
      allowNull: false,
      len: [1]
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      default: false,
      len: [1]
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });

  Product.associate = function (models) {

    Product.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  Product.associate = function (models) {

    Product.hasMany(models.Size, {
      onDelete: "cascade"
    });
  };

  return Product;
};