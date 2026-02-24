// LAB-2: Form Dogrulama (Validation)
// Uygulama-4: novalidate ile ozel dogrulama mantigi

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  // Hata mesajlarini goster
  function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  // Hata mesajlarini temizle
  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + '-error');
    if (errorEl) {
      errorEl.textContent = '';
    }
  }

  // Alan dogrulamasi
  function validateField(field) {
    const id = field.id;

    if (field.required && !field.value.trim()) {
      showError(id, 'Bu alan zorunludur.');
      return false;
    }

    if (field.minLength && field.value.trim().length < field.minLength) {
      showError(id, 'En az ' + field.minLength + ' karakter giriniz.');
      return false;
    }

    if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        showError(id, 'Gecerli bir e-posta adresi giriniz. Ornek: ad@mail.com');
        return false;
      }
    }

    clearError(id);
    return true;
  }

  // Her alana blur event ekle (kullanici alandan cikinca dogrula)
  const fields = form.querySelectorAll('input, textarea, select');
  fields.forEach(function (field) {
    field.addEventListener('blur', function () {
      validateField(field);
    });

    field.addEventListener('input', function () {
      if (document.getElementById(field.id + '-error')?.textContent) {
        validateField(field);
      }
    });
  });

  // Form gonderiminde tum alanlari dogrula
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Basarili gonderim mesaji
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Mesajiniz Gonderildi!';
        submitBtn.style.background = '#16a34a';
        submitBtn.disabled = true;

        setTimeout(function () {
          submitBtn.textContent = 'Gonder';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          form.reset();
        }, 3000);
      }
    } else {
      // Ilk hatali alana focus ver
      const firstError = form.querySelector('.error-msg:not(:empty)');
      if (firstError) {
        const fieldId = firstError.id.replace('-error', '');
        const field = document.getElementById(fieldId);
        if (field) field.focus();
      }
    }
  });
});
