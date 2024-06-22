module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
        },
        usuario: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        foto: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: 'usuario_id'
        }),
            Usuario.hasMany(models.Product, {
                as: "products",
                foreignKey: 'usuario_id'
            })
    }
    return Usuario;

}