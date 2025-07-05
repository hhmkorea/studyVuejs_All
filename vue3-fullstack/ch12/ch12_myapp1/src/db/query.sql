CREATE TABLE board (
    no      INT AUTO_INCREMENT PRIMARY KEY,
    title   VARCHAR(255) NOT NULL,
    content TEXT         NOT NULL,
    author  VARCHAR(100) NOT NULL,
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits    INT      DEFAULT 0
);

INSERT INTO board (title, content, author) VALUES
('첫 번째 공지사항', '첫 번째 공지사항 내용입니다.',  '관리자'),
('두 번째 공지사항', '두 번째 공지사항 내용입니다.',  '관리자'),
('세 번째 공지사항', '세 번째 공지사항 내용입니다.',  '관리자'),
('네 번째 공지사항', '네 번째 공지사항 내용입니다.',  '관리자'),
('다섯 번째 공지사항', '다섯 번째 공지사항 내용입니다.',  '관리자');


alter table board convert to charset utf8; -- 테이블 한글 입력 가능하게 설정 변경.

select * from board;

commit;