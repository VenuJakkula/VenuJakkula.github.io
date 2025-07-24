document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("hero-title");
  const texts = [
    "Venu, A Data Scientist",
    "Venu, A Tech Explorer"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
        return;
      }
    } else {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing/deleting speed
  }

  typeEffect();
});
