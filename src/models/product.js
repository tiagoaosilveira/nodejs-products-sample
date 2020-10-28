module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      timestamps: false,
      tableName: 'products'
    });
  
    return Product;
}
