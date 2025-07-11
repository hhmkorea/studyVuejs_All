
CREATE DATABASE company;
USE company;

CREATE TABLE product
(
    pno      INT AUTO_INCREMENT PRIMARY KEY,
    cate     VARCHAR(255),
    pname    VARCHAR(255),
    pcontent TEXT,
    img1     VARCHAR(255),
    img2     VARCHAR(255),
    img3     VARCHAR(255),
    resdate  DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits     INT      DEFAULT 0
);

truncate product;
INSERT INTO product (cate, pname, pcontent, img1, img2, img3)
VALUES
  ('Category 1', 'Product 1', 'This is the first product', 'img1a.jpg', 'img1b.jpg', 'img1c.jpg'),
  ('Category 2', 'Product 2', 'This is the second product', 'img2a.jpg', 'img2b.jpg', 'img2c.jpg'),
  ('Category 3', 'Product 3', 'This is the third product', 'img3a.jpg', 'img3b.jpg', 'img3c.jpg'),
  ('Category 4', 'Product 4', 'This is the fourth product', 'img4a.jpg', 'img4b.jpg', 'img4c.jpg'),
  ('Category 5', 'Product 5', 'This is the fifth product', 'img5a.jpg', 'img5b.jpg', 'img5c.jpg');

commit;

select * from product;

alter table product convert to charset utf8; -- 테이블 한글 입력 가능하게 설정 변경.

update product set img1='5.jpg' where pcontent = 'test0';