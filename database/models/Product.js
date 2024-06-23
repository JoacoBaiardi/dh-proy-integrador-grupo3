module.exports = function (sequelize, dataTypes) {
    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        producto: {
            type: dataTypes.STRING
        },
        descripcion: {
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
        tableName: "products",
        timestamps: false,
        underscored: true
    };
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function (models){
        Product.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: 'usuario_id'
        }),
        Product.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: 'producto_id'
        })
    }
    return Product;

}