/* ============================================
   Goat FPC — Contact Form Validation
   ============================================ */

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = {
    name:    { el: document.getElementById('contact-name'),    error: document.getElementById('name-error') },
    email:   { el: document.getElementById('contact-email'),  error: document.getElementById('email-error') },
    phone:   { el: document.getElementById('contact-phone'),  error: document.getElementById('phone-error') },
    subject: { el: document.getElementById('contact-subject'), error: document.getElementById('subject-error') },
    message: { el: document.getElementById('contact-message'), error: document.getElementById('message-error') }
  };

  var successMsg = document.getElementById('form-success');

  /* ---- Validators ---- */
  function isEmpty(val) {
    return !val || val.trim() === '';
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function isValidPhone(val) {
    if (isEmpty(val)) return true; // phone is optional
    return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(val);
  }

  function validateField(name) {
    var field = fields[name];
    if (!field || !field.el) return true;

    var val = field.el.value;
    var valid = true;

    switch (name) {
      case 'name':
        valid = !isEmpty(val);
        break;
      case 'email':
        valid = !isEmpty(val) && isValidEmail(val);
        break;
      case 'phone':
        valid = isValidPhone(val);
        break;
      case 'subject':
        valid = !isEmpty(val);
        break;
      case 'message':
        valid = !isEmpty(val) && val.trim().length >= 10;
        break;
    }

    var group = field.el.closest('.form-group');
    if (group) {
      if (valid) {
        group.classList.remove('has-error');
        field.el.classList.remove('is-invalid');
      } else {
        group.classList.add('has-error');
        field.el.classList.add('is-invalid');
      }
    }

    return valid;
  }

  /* ---- Clear errors on input ---- */
  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    if (!field || !field.el) return;
    field.el.addEventListener('input', function () {
      var group = field.el.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        validateField(name);
      }
    });
    field.el.addEventListener('change', function () {
      validateField(name);
    });
  });

  /* ---- Submit ---- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var allValid = true;
    Object.keys(fields).forEach(function (name) {
      if (!validateField(name)) {
        allValid = false;
      }
    });

    if (!allValid) {
      // Focus first invalid field
      var firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission (no backend)
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    setTimeout(function () {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.classList.add('is-visible');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }, 1200);
  });
})();
