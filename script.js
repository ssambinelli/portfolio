
function dark(){
  document.body.classList.toggle('dark');
};

(function(){
  var today = new Date();
  var time = today.getHours()
  if (time >= 18) {
    var button = document.querySelector('.switch input')
    button.click();
  }
})()
