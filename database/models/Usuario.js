module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models){
        Usuario.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: 'usuario_id'
        }),
        Usuario.hasMany(models.Product, {
            as: "producto",
            foreignKey: 'usuario_id'
        })
    }
    return Usuario;

}