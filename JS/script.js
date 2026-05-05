const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });

    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                const offset = 80; 
                const top = target.offsetTop - offset;

                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });
            }

            menu.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    const elements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();