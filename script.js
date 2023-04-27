// document.querySelector('.photo').addEventListener('click', () =>{
//     document.body.classList.toggle('dark')
// })

function dark(){

  var today = new Date();
  // var time = today.getHours()
  var time=19
  
  if (time >= 18) {
    document.body.classList.toggle('dark');

} else{
  document.body.remove.classList.toggle('dark');
}


};

dark();
//     document.body.classList.toggle('dark')
    
// }