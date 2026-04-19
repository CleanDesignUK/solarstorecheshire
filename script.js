// Solar Store Cheshire landing page JavaScript
// Handles form validation, submission to Web3Forms and simple UI interactions.

document.addEventListener('DOMContentLoaded', () => {
  // Set the current year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const form = document.getElementById('leadForm');
  const formMessage = document.getElementById('formMessage');

  // Simple regex patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Matches four or more repeated digits (e.g. 1111, 0000 etc.)
  const repeatedDigitsPattern = /(\d)\1{3,}/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMessage.textContent = '';

    // Read values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const propertyType = form.property_type.value;
    const interest = form.querySelector('input[name="interest"]:checked');

    // Basic validation
    if (!name) {
      formMessage.textContent = 'Please enter your name.';
      return;
    }
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    // Phone should be at least 6 characters and contain only digits, spaces or plus
    const phoneSanitised = phone.replace(/[\s+]/g, '');
    if (!/^[0-9]{6,15}$/.test(phoneSanitised)) {
      formMessage.textContent = 'Please enter a valid phone number (digits only).';
      return;
    }
    if (repeatedDigitsPattern.test(phoneSanitised)) {
      formMessage.textContent = 'Phone number cannot contain more than 3 repeated digits in a row.';
      return;
    }
    if (!propertyType) {
      formMessage.textContent = 'Please select a property type.';
      return;
    }
    if (!interest) {
      formMessage.textContent = 'Please choose what you’re interested in.';
      return;
    }

    // Prepare data for Web3Forms
    const formData = new FormData(form);
    // Add custom fields if necessary
    formData.set('interest', interest.value);

    formMessage.textContent = 'Submitting…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      const data = await response.json();
      if (data.success) {
        formMessage.textContent = 'Thank you! Your request has been received.';
        form.reset();
      } else {
        formMessage.textContent = data.message || 'Something went wrong. Please try again later.';
      }
    } catch (error) {
      formMessage.textContent = 'There was an error submitting the form. Please try again later.';
    }
  });
});