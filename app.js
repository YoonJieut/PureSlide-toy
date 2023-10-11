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

