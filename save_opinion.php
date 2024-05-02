<?php
// 데이터베이스 연결 설정
$servername = "localhost"; // MariaDB 서버 주소
$username = "사용자명"; // 데이터베이스 사용자명
$password = "lwj27234646"; // 데이터베이스 암호
$dbname = "opinions"; // 사용할 데이터베이스명

// POST로 전송된 데이터 받아오기
$title = $_POST['title'];
$content = $_POST['content'];

// 데이터베이스 연결 생성
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

// SQL 쿼리 실행하여 데이터베이스에 데이터 삽입
$sql = "INSERT INTO opinions (title, content) VALUES ('$title', '$content')";
if ($conn->query($sql) === TRUE) {
    echo "의견이 성공적으로 저장되었습니다.";
} else {
    echo "오류: " . $sql . "<br>" . $conn->error;
}

// 데이터베이스 연결 종료
$conn->close();
?>
