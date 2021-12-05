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
// onsubmit() : 폼이 전송될 때`

window.onload = function () {
  alert("I'm loaded")
}

document.getElementById('clickMe').addEventListener('click', function () {
  alert('I clicked!!')
})

let msg = document.getElementById('msg')
let result = document.getElementById('result')
msg.onfocus = function (e) {
  result.innerText = 'onfocus'
}

msg.onblur = function (e) {
  if (msg.value.length < 6) {
    alert('6자리 이상 입력해야 합니다.')
  }
  result.innerText = 'focus가 빠져나갑니다.'
}

// callback function

let cbExample = function (number, cb) {
  setTimeout(function () {
    let sum = 0
    for (let i = number; i > 0; i--) {
      sum += i
    }
    cb(sum)
  }, 3000)
}
cbExample(10, function (result) {
  console.log(result)
})
console.log('first')

// 이벤트 버블링 //
// DOM에 연결한 이벤트는 버블링이 일어납니다.
// 버블링이란 자식의 이벤트가 부모에게도 전달되는 것을 말합니다.
{
  /* 
    <div id="first">
        <div id="second">
            <div id="third"></div>
        </div>
    </div> 
    */
}
// 위와 같은 구조가 있을때 div#third를 클릭한 경우, 부모와 조상태그인 second, first 순으로 같은 이벤트가 발생합니다.


// 이벤트 객체
// DOM에 대한 이벤트에 연결한 함수는 이벤트 객체를 매개변수로 사용할 수 있습니다.
// 이벤트 객체에는 이벤트에 대한 정보들과 이벤트를 조작하는 메소드 들이 있습니다.
document.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}

// preventDefault() 메소드는 태그의 기본 동작 (a태그 클릭 시 링크이동, form 태그의 폼 내용 전송)을 하지 않게 막아주는 역할을 합니다.
// stopPropagation() 메소드는 태그를 클릭 시 부모에게 이벤트가 전달(버블링)되지 않도록 합니다.
// stopImmediatePropagation() 메소드는 부모에게는 어떠한 이벤트도 버블링되지 않으면서 다른 클릭 이벤트도 실행되지 않습니다.
// 단, 다른 종류의 이벤트(마우스 오버 등)는 막지 못합니다.

// event.target : 이벤트가 발생한 태그의 정보가 들어갑니다.
// event.pageX, event.pageY : 클릭한 좌표를 알 수있고, 키보드를 친 경우 event.key로 어떤 키를 쳤는지 알 수 있습니다.

// * 주의사항 * //
// 가끔 HTML에 자체에 이벤트 리스너를 연결하는데 이것은 좋지 않습니다.
// 예) <button onclick="showResult()">클릭</button>
// HTML과 Javascript는 분리가 원칙입니다.
// 그래야 나중에 유지보수가 쉬워집니다.
