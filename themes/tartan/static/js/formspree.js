var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/sean.michael.mcglothlin@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
      location.href = "/thanks";
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Oh noes, there was an error! Please try again.</div>');
    }
  });
});