
function dark(){
  document.body.classList.toggle('dark');
};

(function(){
  var today = new Date();
  var time = today.getHours()
  // var time=20
  if (time >= 18) {
    var button = document.querySelector('.switch input')
    button.click();
  }
})()


function response(){
  const burgerBtn = document.getElementsByClassName(".burger-btn")[0]
  const navLinks = document.getElementsByClassName('.navbarLink')[0]
  navLinks.classList.toggle('active')
}

// const burgerBtn = document.getElementsByClassName(".burger-btn")[0]
// const navLinks = document.getElementsByClassName('.navbarLink')[0]

// burgerBtn.addEventListener('click', ()=> {
//   navLinks.classList.toggle('active')
// })