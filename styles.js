document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const sections = document.querySelector('.sections');
    const arrowIcon = document.getElementById('arrow-icon');

    container.addEventListener('mouseover', (e) => {
        if (e.clientX < 50) { // Si la souris est à moins de 50px du bord gauche
            sidebar.classList.add('open');
            mainContent.classList.add('open');
            sections.classList.add('open');
        }
    });

    container.addEventListener('mouseleave', () => {
        sidebar.classList.remove('open');
        mainContent.classList.remove('open');
        sections.classList.remove('open');
    });

    arrowIcon.addEventListener('mouseover', () => {
        sidebar.classList.add('open');
        mainContent.classList.add('open');
        sections.classList.add('open');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Empêcher la soumission par défaut
    event.preventDefault();

    // Récupérer l'élément du champ e-mail
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('email-error');

    // Réinitialiser le message d'erreur
    emailError.textContent = '';

    // Vérifier si l'adresse e-mail est valide
    if (!emailField.value.includes('@')) {
      // Afficher un message d'erreur si l'adresse e-mail est invalide
      emailError.textContent = 'Veuillez entrer une adresse e-mail valide contenant un @.';
      emailField.focus();
    } else {
      // Soumettre le formulaire si l'adresse e-mail est valide
      this.submit();
    }
  });
