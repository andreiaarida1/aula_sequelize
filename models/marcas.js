module.exports = (Sequelize, DataType) => {
  const Marcas = Sequelize.define('Marcas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.Integer
    },
    marca: {
      allowNull: false,
      type: DataType.STRING
    },
    descricao: {
      allowNull: false,
      type: DataType.STRING
    },
  }, {});

  return Marcas;
}