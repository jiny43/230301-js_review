
    let menu = document.getElementById('menu');

    for(i=0; i<menu.children.length; i++){ 
      //배열이기 때문에 children넣어주삼


  if(i===2) //비교연산자 , "판단 주체"가 엄청 중요함!! 
  {menu.children[i].style.color ="blue"; 
  }
  else{
    menu.children[i].style.backgroundColor = "gray"; 
  } 
} 
// 배열은 순서기때문에 반복문과 잘 어울린다 반복문과 if 문과 궁합이 좋다!
// ---------여기까지 수업시간---------------------

//----------궁금한 것 ! -----------------
let body = document.getElementsByTagName('body');
let html = document.getElementsByTagName('html');
console.dir(menu.children);
console.dir(menu);
console.dir(body);
console.dir(html);


// ----------review 복습하기------------- 

let lis = document.querySelectorAll('li'); 
// li 태그 모두를 변수 lis 로 넣어줌

for (i=0; i<100; i++){
  if(i<5){
    lis[i].style.color='red';
  }
  else if(i>=5 ){
    lis[i].style.color='pink';
  }
}
