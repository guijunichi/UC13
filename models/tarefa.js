const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const usuario = new require('./usuario')
const tipo = new require('./tipo')
class Tarefa extends Model{}
Tarefa.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
    data_cad: {
        type:Sequelize.DATEONLY,
        allowNull: false
      },
      data_conc:{
        type:Sequelize.DATEONLY,
        allowNull: false
      },
      prioridade: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },{
      sequelize,
      modelName:'tarefa'
    }
  )
  
  tipo.hasOne(Tarefa) //Muitos Pets tem muitas Doações - M-p-M
  Tarefa.belongsTo(tipo)

  usuario.hasMany(Tarefa)
  Tarefa.belongsTo(usuario)

  sequelize.sync()
   module.exports = Tarefa