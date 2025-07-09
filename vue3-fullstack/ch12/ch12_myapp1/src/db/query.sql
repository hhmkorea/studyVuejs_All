CREATE TABLE board (
    no      INT AUTO_INCREMENT PRIMARY KEY,
    title   VARCHAR(255) NOT NULL,
    content TEXT         NOT NULL,
    author  VARCHAR(100) NOT NULL,
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits    INT      DEFAULT 0
);
DROP TABLE qna;
CREATE TABLE qna (
    qno     INT AUTO_INCREMENT PRIMARY KEY,
    lev     INT DEFAULT 0,
    parno   INT DEFAULT 1,
    title   VARCHAR(255),
    content TEXT,
    author  VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits    INT      DEFAULT 0
);

CREATE TABLE dataroom (
    dno     INT AUTO_INCREMENT PRIMARY KEY,
    title   VARCHAR(255) NOT NULL,
    content TEXT         NOT NULL,
    author  VARCHAR(100) NOT NULL,
    datafile VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits    INT      DEFAULT 0
);

CREATE TABLE product (
    pno     INT AUTO_INCREMENT PRIMARY KEY,
    cate    VARCHAR(255),
    pcontent TEXT,
    img1    VARCHAR(255),
    img2    VARCHAR(255),
    img3    VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits    INT      DEFAULT 0
);

INSERT INTO board (title, content, author) VALUES
('첫 번째 공지사항', '첫 번째 공지사항 내용입니다.',  '관리자'),
('두 번째 공지사항', '두 번째 공지사항 내용입니다.',  '관리자'),
('세 번째 공지사항', '세 번째 공지사항 내용입니다.',  '관리자'),
('네 번째 공지사항', '네 번째 공지사항 내용입니다.',  '관리자'),
('다섯 번째 공지사항', '다섯 번째 공지사항 내용입니다.',  '관리자');

truncate table qna;

INSERT INTO qna (title, content, author, lev) VALUES
('첫 번째 질문', '첫 번째 질문 내용입니다.',  '사용자1', 0),
('두 번째 질문', '두 번째 질문 내용입니다.',  '사용자2', 0),
('세 번째 질문', '세 번째 질문 내용입니다.',  '사용자3', 0),
('네 번째 질문', '네 번째 질문 내용입니다.',  '사용자4', 0),
('다섯 번째 질문', '다섯 번째 질문 내용입니다.',  '사용자5', 0);

INSERT INTO dataroom (title, content, author, datafile) VALUES
('첫 번째 자료', '첫 번째 자료 내용입니다.',  '관리자', 'file1.pdf'),
('두 번째 자료', '두 번째 자료 내용입니다.',  '관리자', 'file2.docx'),
('세 번째 자료', '세 번째 자료 내용입니다.',  '관리자', 'file3.docx'),
('네 번째 자료', '네 번째 자료 내용입니다.',  '관리자', 'file4.xls'),
('다섯 번째 자료', '다섯 번째 자료 내용입니다.',  '관리자', 'file5.zip');

INSERT INTO product (cate, pname, pcontent, img1, img2, img3) VALUES
('전자제품', '스마트폰', '최신 스마트폰입니다.', 'phone1.jpg', 'phone2.jpg', 'phone3.jpg'),
('전자제품', '노트북', '고성능 노트북입니다.', 'laptop1.jpg', 'laptop2.jpg', 'laptop3.jpg'),
('생활용품', '세탁기', '효율적인 세탁기입니다.', 'washer1.jpg', 'washer2.jpg', 'washer3.jpg'),
('가구', '책상', '편리한 책상입니다.', 'desk1.jpg', 'desk2.jpg', 'desk3.jpg');


alter table board convert to charset utf8; -- 테이블 한글 입력 가능하게 설정 변경.
alter table qna convert to charset utf8;
alter table dataroom convert to charset utf8;
alter table product convert to charset utf8;

select * from board;
select * from qna;          -- parno : 댓글 남길때 게시물 번호
select * from dataroom;
truncate table dataroom;
select * from product;

update dataroom set title = 'test' where title is null;