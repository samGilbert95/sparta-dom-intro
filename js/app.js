document.addEventListener('DOMContentLoaded',() =>{
  //===== GET ELEMENT BY ID =====
  // H1 CODE
  const title = document.getElementById('test');
  title.innerHTML = "Sup";
  title.style.color = 'blue';
  title.style.border = '7px double black';
  title.style.textAlign = "center";
  //===== Event Listeners =====
  title.addEventListener('click',() => {
    console.log('Click');
  });
  //===== Creating Elements =====
  const ulTest = document.createElement('ul');
  ulTest.setAttribute('id','ul-list');
  ulTest.style.paddingLeft = '0';
  // ===== Append to body =====
  document.body.appendChild(ulTest);
  // ===== Add list items =====
  for (var i = 1; i <= 10; i++){
     const listItem = document.createElement('li');
     const randNo = 'Die Roll: ' + Math.floor((Math.random()*6)+1);
     // e = event
     listItem.addEventListener('mouseover',(e) => {
       e.target.style.fontSize = '40px';
       e.target.style.color = 'green';
     });
     listItem.addEventListener('mouseleave',(e) => {
       e.target.style.fontSize = '16px';
       e.target.style.color = 'black';
     });
     ulTest.appendChild(listItem);
     listItem.innerHTML = randNo;
     listItem.style.listStyle = 'none';
     listItem.style.textAlign = 'center';
   }

  //  ===== Add items =====
  // for (var i = 0; i < 9; i++){
  //   const img = document.createElement('img');
  //   img.setAttribute('src','https://stevensegallery.com/200/300');
  //   document.body.appendChild(img);
  // }

  //console.log(ulTest);
  //console.log(document.body.children);
  //document.body.removeChild(test);
});
