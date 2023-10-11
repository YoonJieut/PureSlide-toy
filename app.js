console.log('hi');
const outbox = document.getElementById('ItemsOutbox');
const slideUl = document.getElementById('slideUl');

// * 스르륵 width 만큼 왼쪽으로 이동하는 것
let leftMove= (width) => {
  let temp = 0;
  let leftMoving = setInterval(()=>{
    if(temp > -width) {
      temp = temp -7;
      slideUl.style.left = temp+"px";
    } else {
      clearInterval(leftMoving)
    }
  }, 0.5)
}

// ! 첫 요소 삭제 및 뒤로 이동
let appnedSomething = ()=>{
  console.log('append 실행됨')
  // 첫 번째 요소 삭제하는 변수 작성
  let remove1st = slideUl.removeChild(slideUl.children[0]);
  // 삭제한 것을 반환하는 리무브 차일드 메소드 이용
  slideUl.appendChild(remove1st);
  // ! 옮김과 동시에 left 0 초기화
  slideUl.style.left = 0;
}

// ! 최종 setInterval 작성
setTimeout(()=>{
  // 초반 5초 대기
  // 메인 슬라이드 시작
  setInterval(()=>{
    // *움직이고
    leftMove(700);
    // * 기다리고 
    setTimeout(()=>{
      // *안 보이게 넘기고
      appnedSomething();
    },1000);
  }, 5000)
},5000)


