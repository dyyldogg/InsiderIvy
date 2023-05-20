$(document).ready(function() {
    // Function to handle profile image upload
    function handleProfileImageUpload(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $('#profileImagePreview').attr('src', e.target.result);
          $('#removeImageBtn').show();
          $('#uploadImageBtn').hide();
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  
    // Function to handle remove image button click
    function handleRemoveImage() {
      $('#profileImage').val('');
      $('#profileImagePreview').attr('src', 'img/user2.jpg');
      $('#removeImageBtn').hide();
      $('#uploadImageBtn').show();
    }
  
    // Function to handle upload image button click
    function handleUploadImage() {
      $('#profileImage').click();
    }
  
    // Bind the event handlers
    $('#profileImage').on('change', handleProfileImageUpload);
    $('#removeImageBtn').on('click', handleRemoveImage);
    $('#uploadImageBtn').on('click', handleUploadImage);
  });
  