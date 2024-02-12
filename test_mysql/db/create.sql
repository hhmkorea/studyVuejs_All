-- root/root1234
-- create db
create database weather_test default character set utf8;
show databases ;
use weather_test;

-- table
DROP TABLE weather_test.weather_data;
CREATE TABLE weather_test.weather_data
(
    no BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT '번호',
    weather VARCHAR(20) DEFAULT NULL COMMENT '날씨',
    curr_temp VARCHAR(20)  DEFAULT NULL COMMENT '현재온도',
    highest_temp VARCHAR(20) DEFAULT NULL COMMENT '최고온도',
    lowest_temp VARCHAR(20) DEFAULT NULL  COMMENT '최저온도',
    PRIMARY KEY (no)
)
    COMMENT = '날씨';
