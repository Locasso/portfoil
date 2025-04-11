document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".summary-nav a");
  
    function setActive(link) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  
    // Clique
    links.forEach(link => {
      link.addEventListener("click", () => setActive(link));
    });
  
    // Scroll
    window.addEventListener("scroll", () => {
      let current = null;
      const scrollY = window.scrollY;
  
      // Se o scroll estiver bem no topo, ativa o Home
      if (scrollY < 150) {
        const homeLink = document.querySelector('.summary-nav a[href="#home"]');
        if (homeLink) setActive(homeLink);
        return;
      }
  
      // Caso contrário, verifica normalmente
      links.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = link;
          }
        }
      });
  
      if (current) {
        setActive(current);
      }
    });
  });