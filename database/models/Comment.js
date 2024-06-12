module.exports = function (sequelize, dataTypes) {
    let alias = 'Comment';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        text: {
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
        tableName: "comments",
        timestamps: false,
        underscored: true
    };
    const Comment = sequelize.define(alias, cols, config);
    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: 'producto',
            foreignKey: 'producto_id'
        }),
        Comment.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
    };

    return Comment;

}