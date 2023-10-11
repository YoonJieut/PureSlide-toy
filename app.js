console.log('hi');
const outbox = document.getElementById('ItemsOutbox');
const slideUl = document.getElementById('slideUl');
console.log(outbox, slideUl);
console.dir(slideUl);

// * 스르륵 -700 이동하는 것
function leftMove(){
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
  }, 1)
}

function appnedSomething (){
  console.log('append 실행됨')
  let remove1st = slideUl.removeChild(slideUl.children[0]);
  // 삭제한 것을 반환하는 리무브 차일드 메소드 이용
  slideUl.appendChild(remove1st);
}
appnedSomething();

setTimeout
