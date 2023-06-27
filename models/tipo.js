const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Tipo extends Model{}
Tipo.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
},{
    sequelize,
    modelName:'tipo'
  }
)
sequelize.sync()
 module.exports = Tipo   