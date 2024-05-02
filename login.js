// login.js

document.addEventListener('DOMContentLoaded', function() {
    var studentIdInput = document.getElementById('student_id');
    var passwordInput = document.getElementById('password');

    // 입력 필드에 포커스를 받으면 placeholder를 삭제
    studentIdInput.addEventListener('focus', function() {
        studentIdInput.placeholder = '';
    });

    passwordInput.addEventListener('focus', function() {
        passwordInput.placeholder = '';
    });

    // 입력 필드에서 포커스를 잃으면 placeholder를 다시 설정
    studentIdInput.addEventListener('blur', function() {
        studentIdInput.placeholder = '학  번';
    });

    passwordInput.addEventListener('blur', function() {
        passwordInput.placeholder = '비밀번호';
    });
});
