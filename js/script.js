            (function initCountdown() {
                const targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 18);
                targetDate.setHours(targetDate.getHours() + 8);
                targetDate.setMinutes(targetDate.getMinutes() + 42);
                const daysEl = document.getElementById('days');
                const hoursEl = document.getElementById('hours');
                const minutesEl = document.getElementById('minutes');
                const secondsEl = document.getElementById('seconds');
                function updateTimer() {
                    const now = new Date().getTime();
                    const difference = targetDate - now;
                    if (difference > 0) {
                        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                        if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
                        if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
                        if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
                        if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
                    }
                }
                setInterval(updateTimer, 1000);
                updateTimer();
            })();
        function filterLinks(category) {
            const cards = document.querySelectorAll('.link-card');
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-gold-500', 'text-maroon-950', 'shadow-md');
                btn.classList.add('bg-maroon-900/60', 'text-gold-200');
            });
            event.currentTarget.classList.remove('bg-maroon-900/60', 'text-gold-200');
            event.currentTarget.classList.add('bg-gold-500', 'text-maroon-950', 'shadow-md');
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'block';
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        }
        function copyBioLink() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showToast();
            }).catch(() => {
                showToast();
            });
        }
        function shareLink() {
            if (navigator.share) {
                navigator.share({
                    title: 'Sandi Yudha Competition 2026 - Pramuka Unsri',
                    text: 'Official Link Hub & Panduan Kegiatan Sandi Yudha Competition 2026 Racana Unsri!',
                    url: window.location.href,
                }).catch(() => { });
            } else {
                copyBioLink();
            }
        }
        function showToast() {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                toast.classList.add('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    toast.classList.remove('opacity-100', 'translate-y-0');
                    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                }, 2800);
            }
        }