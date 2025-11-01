// copy button for email/phone
const buttons = document.querySelectorAll('.copyBtn');
const toast = document.getElementById('toast');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(text).then(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1500);
    });
  });
});

// address & account number copy
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(text).then(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1500);
    });
  });
});
