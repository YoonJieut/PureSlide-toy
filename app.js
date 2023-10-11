console.log('hi');
const outbox = document.getElementById('ItemsOutbox');
const slideUl = document.getElementById('slideUl');
console.log(outbox, slideUl);
console.dir(slideUl);

// * 스르륵 -700 이동하는 것
let leftMove=() => {
  console.log('왼쪽 이동 인터벌 시작')
  let temp = 0;
  let leftMoving = setInterval(()=>{
    console.log("인터벌 도는 중");
    if(temp > -700) {
      temp = temp -7;
      slideUl.style.left = temp+"px";
    } else {
      clearInterval(leftMoving)
    }
  }, 0.5)
}

let appnedSomething = ()=>{
  console.log('append 실행됨')
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
    leftMove();
    // * 기다리고 
    setTimeout(()=>{
      // *안 보이게 넘기고
      appnedSomething();
    },1000);
  }, 5000)
},5000)


