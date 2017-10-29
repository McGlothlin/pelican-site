Title: Sean McGlothlin
Subtitle: Contact
Slug: contact
Author: Sean McGlothlin

## Contact

<form id="contact-form" action="//formspree.io/sean.michael.mcglothlin@gmail.com" method="POST">
  <fieldset>
    <label for="name">Name</label><br>
    <input id="name" type="text" name="name" placeholder="Your name" required>
  </fieldset>

  <fieldset>
    <label for="_replyto">Email</label><br>
    <input id="_replyto" type="email" name="_replyto" placeholder="example@domain.com" required>
  </fieldset>

  <fieldset>
    <label for="message">Message</label><br>
    <textarea id="message" name="message" rows="1" placeholder="Tell me a little about yourself!" required></textarea>
  </fieldset>

  <input class="hidden" type="text" name="_gotcha" style="display:none">
  <input class="hidden" type="hidden" name="_subject" value="Message via https://seanmcglothlin.com">
  <input class="button submit" type="submit" value="Send">
</form>
<br>
<script src="/theme/js/jquery-3.2.1.min.js"></script>
<script src="/theme/js/formspree.js"></script>