// document.querySelector('.photo').addEventListener('click', () =>{
//     document.body.classList.toggle('dark')
// })

function dark(){

  var today = new Date();
  var time = today.getHours()
  console.log(time);
  
  if (time >= 18) {
    document.body.classList.toggle('dark');
} if (time >= 6 && time <18){
  document.body.remove.classList.toggle('dark');
}


};

dark();
//     document.body.classList.toggle('dark')
    
// }