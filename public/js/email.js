$(document).ready(function() {

    $(document).on("click",".emailButton", function(){
        window.location.href = "/email";
   
  });

  var form = $("#form");
  var emailName = $("#emailName");
  var emailEmail = $("#emailEmail");
  var emailMessage= $("#emailMessage");
  var emailToEmail = $(".emailButton");
  
  $(form).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    var max_chars = 150;
    if(emailMessage > max_chars) {
      alert("Message is over 150 characters.");
      return;

    }
    // Constructing a newPost object to hand to the database
    var newEmail = {
      emailName: emailName.val(),
      emailEmail: emailEmail.val(),
      emailMessage: emailMessage.val(),
      emailEmail: emailToEmail.val()
    };
    console.log(newEmail);
    submitEmail(newEmail);
  });

  // Submits a new post and brings user to home page upon completion
  function submitEmail(newEmail) {
    $.post("/send", newEmail, function() {
        alert("Email has been sent!")
      window.location.href = "/home";
    });
  }
});