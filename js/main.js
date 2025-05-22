document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll("#navbar a");

  // Function to load a section
  const loadSection = (section) => {
    fetch(`sections/${section}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load ${section}.html`);
        }
        return response.text();
      })
      .then((html) => {
        content.innerHTML = html;
      })
      .catch((error) => {
        content.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      });
  };

  // Load the home section by default
  loadSection("home");

  // Add event listeners to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.getAttribute("data-section");
      loadSection(section);
    });
  });
});
