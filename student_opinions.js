document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("opinionForm");
    const nameInput = document.getElementById("name");
    const opinionInput = document.getElementById("opinion");
    const opinionList = document.getElementById("opinionList");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const opinion = opinionInput.value;

        if (name.trim() === '' || opinion.trim() === '') {
            alert("이름과 의견을 모두 입력하세요.");
            return;
        }

        const opinionItem = document.createElement("li");
        opinionItem.innerHTML = `<strong>${name}</strong>: ${opinion}`;
        opinionList.appendChild(opinionItem);

        // 서버로 의견을 전송하는 코드는 이 부분에 추가할 수 있습니다.
        // 여기서는 간단히 콘솔에 로그를 출력합니다.
        console.log(`Name: ${name}, Opinion: ${opinion}`);

        // 폼 초기화
        nameInput.value = '';
        opinionInput.value = '';
    });
});
