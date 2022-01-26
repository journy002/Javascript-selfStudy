// event.preventDefault() vs event.stopPropagation()

// 정리

// event.preventDefault() : html에서 표준으로 제공하는 태그의 기본 이벤트 발생을 막는 메소드.
// 예) <a></a> , <submit></submit>, <button></button>태그는 각각 페이지 이동이나 form 데이터 전송 등의 기본 이벤트 발생을 막을 수 있다.

// event.stopPropagation() : 자식 엘리먼트에 어떠한 이벤트를 실행 시켰을때 상위 엘리먼트로 전파(버블링)를 중단시킨다.
