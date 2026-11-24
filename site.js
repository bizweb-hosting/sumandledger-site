// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = 'Website inquiry: ' + f.topic.value + ' (' + f.name.value + ')';
      var body =
        'Name: ' + f.name.value + '\n' +
        'Email: ' + f.email.value + '\n' +
        'Phone: ' + f.phone.value + '\n' +
        'Interested in: ' + f.topic.value + '\n\n' +
        f.message.value;
      window.location.href = 'mailto:team@sumandledger.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
