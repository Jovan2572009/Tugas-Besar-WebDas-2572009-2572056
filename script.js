
        const themeBtn = document.getElementById('themeBtn');
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeBtn.innerText = 'Mode Gelap';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeBtn.innerText = 'Mode Terang';
            }
        });

       
        const textArr = ["Menelusuri Histori Batavia.", "Mengenal Warisan Kultural Betawi.", "Proyek WebDas Kelompok Jovan & Alifi."];
        let textIndex = 0;
        let charIndex = 0;
        const typewriterElement = document.getElementById('typewriter');

        function type() {
            if (charIndex < textArr[textIndex].length) {
                typewriterElement.innerHTML += textArr[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typewriterElement.innerHTML = textArr[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % textArr.length;
                setTimeout(type, 500);
            }
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(type, 1000);
        });

       
        const modal = document.getElementById('infoModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        function openModal(title, text) {
            modalTitle.innerText = title;
            modalBody.innerText = text;
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        
        document.querySelectorAll('nav ul li a, .btn').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });