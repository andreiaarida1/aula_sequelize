module.exports = (Sequelize, DataType) => {
  const Produtos = Sequelize.define('Produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER
    },
    produto: {
      allowNull: false,
      type: DataType.STRING
    },
    marca: {
      allowNull: false,
      type: DataType.INTEGER
    },
    preco: {
      allowNull: false,
      type: DataType.FLOAT
    },
  }, {});

  Produtos.associate = (models) => {
    Produtos.belongsTo(models.Marcas, {
      foreignKey: 'marca',
      targetKey: 'id',
      as: 'm'
    });
  }
  
  return Produtos;
}