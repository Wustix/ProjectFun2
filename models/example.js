module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("hmj82t0cjwpu9lri", {
    category_list: DataTypes.STRING,
    name_list: DataTypes.STRING,
    price_list: DataTypes.STRING,
    description_list: DataTypes.STRING,
    email_list: DataTypes.STRING,
  });
  return Example;
};
// category_list VARCHAR (100),
// 	name_list varchar(75) NOT NULL,
// 	price_list INTEGER (6),
// 	description_list VARCHAR (255),
//     email_list VARCHAR (100),