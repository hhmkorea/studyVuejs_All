
CREATE DATABASE company;
USE company;

-- board 테이블 생성
CREATE TABLE board (
                       no INT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255) NOT NULL,
                       content TEXT NOT NULL,
                       author VARCHAR(100) NOT NULL,
                       resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
                       hits INT DEFAULT 0
);

-- board 테이블에 관한 더미 데이터 삽입
INSERT INTO board (title, content, author) VALUES
                                               ('First Post', 'This is the first post. ', 'Alice'),
                                               ('Second Post', 'This is the second post. ', 'Bob'),
                                               ('Thirst Post', 'This is the third post. ', 'Charlie'),
                                               ('Fourth Post', 'This is the fourth post. ', 'David'),
                                               ('Fifth Post', 'This is the fifth post. ', 'Eve');

COMMIT;

SELECT * FROM board;
alter table board convert to charset utf8; -- 테이블 한글 입력 가능하게 설정 변경.