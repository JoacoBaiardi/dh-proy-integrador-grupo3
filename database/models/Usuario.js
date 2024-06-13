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
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        DNI: {
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
            allowNull: false
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;

}