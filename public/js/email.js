$(document).ready(function() {

$( ".emailButton" ).click(function() {
   emailUser();
   console.log('click heard');
    
  });

  function emailUser() {
      window.location.href = "/email";
    
  }
  var form = $("#form");
  var emailName = $("#emailName");
  var emailEmail = $("#emailEmail");
  var emailMessage= $("#emailMessage");
  var emailToEmail = $(".emailButton");

  $(form).on("submit", function handleFormSubmit(event) {
    emailUser();
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!emailName.val().trim() || !emailEmail.val().trim() || !emailMessage.val().trim() || !emailToEmail.val().trim()) {
      return;

      
    }
    var max_chars = 150;
    if(emailMessage > max_chars) {
      alert("Message is over 150 characters.");
      return;

    }
    // Constructing a newPost object to hand to the database
    var newEmail = {
      title: titleInput.val().trim(),
      email: emailInput.val().trim(),
      price: priceInput.val().trim(),
      photo: photoInput.val().trim(),
      body: bodyInput.val().trim(),
      category: postCategorySelect.val()
    };

    console.log(newEmail);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newEmail.id = postId;
      updatePost(newEmail);
    }
    else {
      submitEmail(newEmail);
    }
  });

  // Submits a new post and brings user to home page upon completion
  function submitEmail(newEmail) {
    $.post("/send", newEmail, function() {
      window.location.href = "/home";
    });
  }
});