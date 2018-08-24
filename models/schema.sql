CREATE DATABASE hmj82t0cjwpu9lri;

CREATE TABLE categories (

	id INTEGER NOT NULL AUTO_INCREMENT,
    category_list VARCHAR (100),
	name_list varchar(75) NOT NULL,
	price_list INTEGER (6),
	description_list VARCHAR (255),
    email_list VARCHAR (100),
    PRIMARY KEY (id)
);

INSERT INTO categories (category_list, name_list, price_list, description_list, email_list) 
VALUES ("Auto", "Bernie", 4000, "'74 Dodge Horizon", "berniemac@msn.com");

INSERT INTO categories (category_list, name_list, price_list, description_list, email_list) 
VALUES ("Jewelry", "Annie", 800, "diamond ring", "pseudocyst@yahoo.com");

INSERT INTO categories (category_list, name_list, price_list, description_list, email_list) 
VALUES ("Sporting", "Max", 400, "ascend kayak", "womanizer@aol.com");



