var submit = $('.submit-button');
var form = $('#form');

submit.on("click", doSomething);
function doSomething(event) {
  event.preventDefault();
  alert("You have successfully filled out this form");
};

var yes = $('#yes');
yes.on("click", yeah); 

function yeah(){
   alert("Thank you for filling out the form please go ahead and submit");
};

 var no = $('#no');
 no.on("click", no1);

 function no1(){
   form.append(`<label> Your Name :</label>
  <input type = "text">`);
 };






  


