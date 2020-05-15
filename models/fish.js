module.exports = function (sequelize, DataTypes) {
    var Fish = sequelize.define("Fish", {
        Species: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Length: {
            type: DataTypes.STRING ,
            allowNull: false,
            len: [1]
        },
        Weight: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            len: [1]
        }
    });

    Fish.associate = function (models) {

        Fish.belongsTo(models.location, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
};