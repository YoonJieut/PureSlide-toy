console.log('hi');
const outbox = document.getElementById('ItemsOutbox');
const slideUl = document.getElementById('slideUl');
console.log(outbox, slideUl);

// * 스르륵 -700 이동하는 것
setInterval(()=>{
  console.log('인터벌 시작 10');
  console.log( slideUl.style.left);
  let leftPx = 0;
  if(leftPx > -700){
    leftPx--;
    slideUl.style.left = leftPx+"px";
    console.log( slideUl.style.left);
  }
}, 10)
