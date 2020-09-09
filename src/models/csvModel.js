
  module.exports = (sequelize, Sequelize) =>{
    const Csv = sequelize.define("csv",{
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type: Sequelize.INTEGER
        },
        timestamp:{
            allowNull:false,
            type: Sequelize.STRING(255)
        },
        sensor_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        total: {
           
            allowNull: true,
            type: Sequelize.INTEGER
        },

    },{updatedAt: false,
        timestamps: false

    });

    return Csv;
};