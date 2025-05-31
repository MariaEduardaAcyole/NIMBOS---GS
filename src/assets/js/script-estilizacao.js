// Animações de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animação de chuva
function createRain() {
    const rainContainer = document.getElementById('rain');
    const drops = 50;

    for (let i = 0; i < drops; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.height = Math.random() * 20 + 10 + 'px';
        drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(drop);
    }
}

createRain();

// Menu móvel toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll e active links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Fechar menu móvel após clique
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    // Navbar background on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link detection
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// slides

 const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Troca automática a cada 4 segundos
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  // Para o slide automático
  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Inicializa o carrossel
  showSlide(currentIndex);
  startSlideShow();

  // Clique nas bolinhas para navegar manualmente e reiniciar o intervalo
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      stopSlideShow();
      showSlide(parseInt(e.target.dataset.index));
      startSlideShow();
    });
  });

  /* ========================================= */
/* ========== LÓGICA DO SELETOR DE TEMAS ========= */
/* ========================================= */

// Seleciona todos os ícones de tema e o elemento body
const themeIcons = document.querySelectorAll('.theme-icon');
const body = document.body;

// Função para aplicar um tema
const applyTheme = (theme) => {
    // Remove todas as classes de tema existentes do body
    body.classList.remove('default', 'dark', 'ocean');
    
    // Adiciona a nova classe de tema, exceto para o padrão (que não precisa de classe)
    if (theme !== 'default') {
        body.classList.add(theme);
    }
};

// Função para salvar o tema no armazenamento local do navegador
const saveTheme = (theme) => {
    localStorage.setItem('nimbos_theme', theme);
};

// Adiciona um "ouvinte" de clique para cada ícone
themeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Pega o tema do atributo 'data-theme' do ícone clicado
        const theme = icon.dataset.theme;
        
        // Aplica e salva o tema
        applyTheme(theme);
        saveTheme(theme);
    });
});

// Função para carregar o tema salvo quando a página é carregada
const loadTheme = () => {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('nimbos_theme');
    
    // Se houver um tema salvo, aplica-o. Senão, usa o padrão.
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('default');
    }
};

// Executa a função para carregar o tema assim que o script é lido
loadTheme();