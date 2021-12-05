// EventListener : 해당 이벤트가 발생했을 때 등록했던 이벤트 리스터나 실행된다.

// 자주 사용되는 이벤트 목록

// onblur() : 객체가 focus를 잃었을때
// onchange() : 객체의 내용이 바뀌고 focus를 잃었을때
// onkeydown() : 키를 눌렀을 때
// onkeypress() : 키를 누르고 있을 때
// onkeyup() : 키를 눌렀다 땠을 때
// onload() : 문서나 객체가 로딩되었을 때
// onmouseover() : 마우스가 객체 위에 올라왔을 때
// onmouseout() : 마우스가 객체 바깥으로 나갔을 때
// onreset() : Reset 버튼을 눌렀을 때
// onresize() : 객체의 크기가 바뀌었을 때
// onscroll() : 스크롤바를 조작할 때
// onsubmit() : 폼이 전송될 때

window.onload = function () {
    alert('I\'m loaded')
}