/**
 * ApplyLogics - Cyberpunk GSAP Animations
 * Dark Monokai Theme with Glitch Effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

    // ================================
    // CONFIGURATION
    // ================================
    const config = {
        colors: {
            cyan: '#66d9ef',
            magenta: '#f92672',
            yellow: '#e6db74',
            green: '#a6e22e'
        },
        easing: {
            smooth: 'power2.out',
            spring: 'elastic.out(1, 0.5)',
            sharp: 'power4.out',
            bounce: 'back.out(1.7)'
        }
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const deviceMemory = navigator.deviceMemory || 8;
    const cpuCores = navigator.hardwareConcurrency || 8;

    let motionTier = 'full';
    if (prefersReducedMotion) {
        motionTier = 'light';
    } else if (deviceMemory <= 4 || cpuCores <= 4 || isTouch || isSmallScreen) {
        motionTier = 'medium';
    }

    const motionProfiles = {
        full: {
            cursorFps: 60,
            enableCursor: true,
            randomGlitch: true,
            randomGlitchMin: 6000,
            randomGlitchRange: 4000,
            glitchFrameMs: 30,
            glitchTimeoutMs: 2000,
            scrambleText: true,
            parallax: true,
            circuitAnimation: 'scrub'
        },
        medium: {
            cursorFps: 30,
            enableCursor: true,
            randomGlitch: true,
            randomGlitchMin: 9000,
            randomGlitchRange: 6000,
            glitchFrameMs: 45,
            glitchTimeoutMs: 1600,
            scrambleText: true,
            parallax: false,
            circuitAnimation: 'animate'
        },
        light: {
            cursorFps: 20,
            enableCursor: false,
            randomGlitch: false,
            randomGlitchMin: 12000,
            randomGlitchRange: 8000,
            glitchFrameMs: 70,
            glitchTimeoutMs: 1200,
            scrambleText: false,
            parallax: false,
            circuitAnimation: 'static'
        }
    };

    const motionSettings = motionProfiles[motionTier];

    // ================================
    // SYSTEM BOOT PRELOADER
    // ================================
    function initPreloader() {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="preloader-terminal"></div>
            </div>
            <div class="preloader-bar-container">
                <div class="preloader-bar"></div>
            </div>
        `;
        document.body.appendChild(preloader);

        const terminal = preloader.querySelector('.preloader-terminal');
        const bar = preloader.querySelector('.preloader-bar');
        
        const bootSequence = [
            "INITIALIZING APPLYLOGICS_CORE_V2.0...",
            "LOADING ASSETS [####################] 100%",
            "ESTABLISHING SECURE PROTOCOLS...",
            "BYPASSING LEGACY ARCHITECTURE...",
            "INJECTING ADAPTIVE AI AGENTS...",
            "SYSTEM STATUS: OPTIMAL",
            "WELCOME TO THE FUTURE."
        ];

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloader, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: () => {
                        preloader.remove();
                        startHeroAnimations();
                    }
                });
            }
        });

        tl.to(bar, { scaleX: 1, duration: 2, ease: "none" });

        bootSequence.forEach((text, i) => {
            tl.to(terminal, {
                duration: 0.2,
                text: {
                    value: terminal.textContent + "\n> " + text,
                    delimiter: ""
                },
                ease: "none"
            }, i * 0.3);
        });

        return tl;
    }

    // ================================
    // TACTICAL CURSOR
    // ================================
    function initTacticalCursor() {
        if (!motionSettings.enableCursor) return;

        const main = document.createElement('div');
        const follower = document.createElement('div');
        main.className = 'cursor-main';
        follower.className = 'cursor-follower';
        document.body.appendChild(main);
        document.body.appendChild(follower);

        // Position initial state
        gsap.set([main, follower], { xPercent: -50, yPercent: -50 });

        // Hide default cursor
        document.body.style.cursor = 'none';
        
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.15;

        const xSet = gsap.quickSetter(main, "x", "px");
        const ySet = gsap.quickSetter(main, "y", "px");
        const xFollowSet = gsap.quickSetter(follower, "x", "px");
        const yFollowSet = gsap.quickSetter(follower, "y", "px");

        window.addEventListener("mousemove", e => {    
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        const frameInterval = 1000 / motionSettings.cursorFps;
        let lastFrameTime = 0;
        let rafId = null;
        let idleTimeout = null;

        const update = (time) => {
            if (time - lastFrameTime < frameInterval) {
                rafId = requestAnimationFrame(update);
                return;
            }
            lastFrameTime = time;

            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;

            xSet(mouse.x);
            ySet(mouse.y);
            xFollowSet(pos.x);
            yFollowSet(pos.y);

            rafId = requestAnimationFrame(update);
        };

        const startLoop = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(update);
        };

        const stopLoop = () => {
            if (!rafId) return;
            cancelAnimationFrame(rafId);
            rafId = null;
        };

        const resetIdleTimer = () => {
            if (idleTimeout) clearTimeout(idleTimeout);
            startLoop();
            idleTimeout = setTimeout(stopLoop, 1200);
        };

        window.addEventListener('mousemove', () => {
            resetIdleTimer();
        }, { passive: true });

        resetIdleTimer();

        // Hover states using delegation
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .value-item, .focus-item')) {
                document.body.classList.add('cursor-active');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .value-item, .focus-item')) {
                document.body.classList.remove('cursor-active');
            }
        });
    }

    // ================================
    // SCROLL PROGRESS BAR
    // ================================
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    gsap.to(scrollProgress, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // ================================
    // SCROLL TO TOP BUTTON
    // ================================
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.setAttribute('role', 'button');
    scrollBtn.setAttribute('tabindex', '0');
    document.body.appendChild(scrollBtn);

    const toggleScrollBtn = () => {
        if (window.pageYOffset > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    };

    scrollBtn.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
    });

    scrollBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
        }
    });

    window.addEventListener('scroll', toggleScrollBtn, { passive: true });

    // ================================
    // SMOOTH SCROLL FOR NAV LINKS
    // ================================
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: targetPos, autoKill: false },
                        ease: 'power2.inOut'
                    });

                    document.querySelector('.nav-menu')?.classList.remove('mobile-active');
                }
            }
        });
    });

    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
            mobileBtn.textContent = navMenu.classList.contains('mobile-active') ? 'Close' : 'Menu';

            if (navMenu.classList.contains('mobile-active')) {
                gsap.from('.nav-link', {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: config.easing.smooth
                });
            }
        });
    }

    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================
    const navbar = document.querySelector('.navbar');

    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.direction === 1 && window.pageYOffset > 100) {
                gsap.to(navbar, {
                    background: 'rgba(18, 18, 18, 0.98)',
                    borderBottomColor: 'rgba(102, 217, 239, 0.2)',
                    duration: 0.3
                });
            } else if (window.pageYOffset < 100) {
                gsap.to(navbar, {
                    background: 'rgba(18, 18, 18, 0.85)',
                    borderBottomColor: 'rgba(102, 217, 239, 0.1)',
                    duration: 0.3
                });
            }
        }
    });

    // ================================
    // HERO SECTION ANIMATIONS
    // ================================
    function startHeroAnimations() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;

        const heroTL = gsap.timeline();

        heroTL
            .from('.hero-badge', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: config.easing.smooth
            })
            .from('.hero-main-title', {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: config.easing.sharp,
                onComplete: () => {
                    const gradientText = document.querySelector('.hero-main-title .gradient-text');
                    if (gradientText) {
                        gradientText.dataset.originalText = gradientText.textContent;
                        glitchText(gradientText);
                    }
                }
            }, '-=0.3')
            .from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: config.easing.smooth
            }, '-=0.4')
            .from('.hero-description p', {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.5,
                ease: config.easing.smooth
            }, '-=0.3')
            .from('.hero-cta .btn-primary', {
                opacity: 0,
                x: -30,
                duration: 0.5,
                ease: config.easing.bounce
            }, '-=0.2')
            .from('.hero-cta .btn-secondary', {
                opacity: 0,
                x: -30,
                duration: 0.5,
                ease: config.easing.bounce
            }, '-=0.3')
            .from('.hero-stats', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: config.easing.smooth
            }, '-=0.2')
            .from('.stat-item', {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.4,
                ease: config.easing.smooth
            }, '-=0.3');

        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroTL
                .from('.terminal-window', {
                    opacity: 0,
                    x: 50,
                    rotateY: -15,
                    duration: 0.8,
                    ease: config.easing.smooth
                }, '-=0.8')
                .from('.code-snippet', {
                    opacity: 0,
                    x: 50,
                    rotateY: 10,
                    duration: 0.8,
                    ease: config.easing.smooth
                }, '-=0.5');
        }

        gsap.from('.float-line', {
            opacity: 0,
            x: 100,
            stagger: 0.2,
            duration: 1,
            ease: config.easing.smooth,
            delay: 0.5
        });

        gsap.from('.cyber-circle', {
            opacity: 0,
            scale: 0.5,
            stagger: 0.3,
            duration: 1.2,
            ease: config.easing.smooth,
            delay: 0.8
        });

        gsap.from('.scroll-indicator', {
            opacity: 0,
            y: -20,
            duration: 0.8,
            delay: 2,
            ease: config.easing.smooth
        });
    }

    // ================================
    // TERMINAL TYPING EFFECT
    // ================================
    const terminalCommand = document.querySelector('.terminal-command');
    const terminalOutput = document.querySelector('.terminal-output');

    if (terminalCommand) {
        const commands = [
            'npm run build-future',
            'deploying solution...',
            'initializing AI modules...'
        ];

        const outputs = [
            '✓ Building digital solutions...',
            '✓ Optimizing performance...',
            '✓ Ready for launch!'
        ];

        let commandIndex = 0;

        function typeCommand() {
            const command = commands[commandIndex % commands.length];

            gsap.to(terminalCommand, {
                duration: command.length * 0.05,
                text: command,
                ease: 'none',
                onComplete: () => {
                    setTimeout(() => {
                        if (terminalOutput) {
                            terminalOutput.innerHTML = outputs.slice(0, (commandIndex % commands.length) + 1)
                                .map(o => `<div style="color: var(--accent-green); margin-bottom: 4px;">${o}</div>`)
                                .join('');
                        }
                        commandIndex++;
                        setTimeout(() => {
                            terminalCommand.textContent = '';
                            if (terminalOutput) terminalOutput.innerHTML = '';
                            typeCommand();
                        }, 3000);
                    }, 500);
                }
            });
        }
        setTimeout(typeCommand, 4000);
    }

    // ================================
    // COUNTER ANIMATION FOR STATS
    // ================================
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const suffix = stat.textContent.replace(/[0-9]/g, '');

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(stat, {
                    duration: 2,
                    innerHTML: target,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out',
                    onUpdate: function() {
                        stat.textContent = Math.round(this.targets()[0].innerHTML) + suffix;
                    }
                });
            },
            once: true
        });
    });

    // ================================
    // TEXT GLITCH EFFECT
    // ================================
    const activeGlitchElements = new Set();

    function glitchText(element) {
        if (activeGlitchElements.has(element)) return;
        activeGlitchElements.add(element);

        const originalText = element.textContent || element.dataset.originalText;
        if (!element.dataset.originalText) {
            element.dataset.originalText = originalText;
        }

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?<>[]{}';
        let iterations = 0;
        const maxIterations = originalText.length;
        let intervalId = null;

        const safetyTimeout = setTimeout(() => {
            if (intervalId) clearInterval(intervalId);
            element.textContent = element.dataset.originalText || originalText;
            activeGlitchElements.delete(element);
        }, motionSettings.glitchTimeoutMs);

        intervalId = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((letter, index) => {
                    if (letter === ' ') return ' ';
                    if (index < iterations) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            if (iterations >= maxIterations) {
                clearInterval(intervalId);
                clearTimeout(safetyTimeout);
                element.textContent = element.dataset.originalText || originalText;
                activeGlitchElements.delete(element);
            }
            iterations += 0.5;
        }, motionSettings.glitchFrameMs);
    }

    // ================================
    // SCROLL TRIGGERED ANIMATIONS
    // ================================
    gsap.utils.toArray('.section-title, .focus-section h2, .partners-section h2').forEach(title => {
        const originalText = title.textContent;

        gsap.fromTo(title, 
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                onStart: () => {
                    if (!motionSettings.scrambleText) {
                        if (title.classList.contains('section-title')) {
                            glitchText(title);
                        }
                        return;
                    }

                    gsap.to(title, {
                        duration: 1.2,
                        scrambleText: {
                            text: originalText,
                            chars: "XY01_<>[]",
                            revealDelay: 0.1,
                            speed: 0.3
                        },
                        onComplete: () => {
                            if (title.classList.contains('section-title')) {
                                glitchText(title);
                            }
                        }
                    });
                }
            }
        );
    });

    gsap.utils.toArray('.value-props, .focus-section, .footer').forEach(section => {
        gsap.fromTo(section, 
            { '--divider-scale': 0 },
            {
                '--divider-scale': 1,
                duration: 1.5,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    gsap.utils.toArray('.section-subtitle, .focus-subtitle').forEach(subtitle => {
        gsap.from(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: config.easing.smooth
        });
    });

    const valueCards = gsap.utils.toArray('.value-item');
    if (valueCards.length) {
        gsap.set('.value-item', { opacity: 0, y: 50 });
        valueCards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: config.easing.smooth
            });
        });
    }

    const focusCards = gsap.utils.toArray('.focus-item');
    if (focusCards.length) {
        gsap.set('.focus-item', { opacity: 0, y: 40 });
        focusCards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: (index % 4) * 0.1,
                ease: config.easing.smooth
            });
        });
    }

    const testimonials = gsap.utils.toArray('.testimonial');
    if (testimonials.length) {
        gsap.set('.testimonial', { opacity: 0, y: 50 });
        testimonials.forEach((testimonial, index) => {
            gsap.to(testimonial, {
                scrollTrigger: {
                    trigger: testimonial,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: (index % 2) * 0.15,
                ease: config.easing.smooth
            });
        });
    }

    // ================================
    // CIRCUIT LINES ANIMATION
    // ================================
    function initCircuitLines() {
        const grid = document.querySelector('.value-grid');
        if (!grid) return;

        const container = document.createElement('div');
        container.className = 'circuit-container';
        grid.style.position = 'relative';
        grid.appendChild(container);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.className = 'circuit-svg';
        container.appendChild(svg);

        const items = document.querySelectorAll('.value-item');
        if (items.length < 2) return;

        for (let i = 0; i < items.length - 1; i++) {
            const start = items[i];
            const end = items[i+1];
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.className = 'circuit-line';
            svg.appendChild(path);

            const updatePath = () => {
                const r1 = start.getBoundingClientRect();
                const r2 = end.getBoundingClientRect();
                const gr = grid.getBoundingClientRect();

                const x1 = (r1.left + r1.width / 2) - gr.left;
                const y1 = (r1.top + r1.height / 2) - (gr.top + window.scrollY); // Handle relative to grid
                const x2 = (r2.left + r2.width / 2) - gr.left;
                const y2 = (r2.top + r2.height / 2) - (gr.top + window.scrollY);

                const d = `M ${x1} ${y1} L ${x2} ${y2}`;
                path.setAttribute('d', d);
                
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
            };

            updatePath();
            window.addEventListener('resize', updatePath);

            if (motionSettings.circuitAnimation === 'static') {
                path.style.strokeDashoffset = 0;
                continue;
            }

            if (motionSettings.circuitAnimation === 'animate') {
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: start,
                        start: "top 80%",
                        toggleActions: 'play none none reverse'
                    }
                });
                continue;
            }

            gsap.to(path, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: start,
                    start: "center center",
                    endTrigger: end,
                    end: "center center",
                    scrub: 1
                }
            });
        }
    }

    // ================================
    // CARD HOVER EFFECTS
    // ================================
    const cards = document.querySelectorAll('.value-item, .focus-item');
    cards.forEach(card => {
        const cardNumber = card.querySelector('.value-number');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3 });
            if (cardNumber) gsap.to(cardNumber, { scale: 1.1, boxShadow: '0 0 30px rgba(102, 217, 239, 0.5)', duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3 });
            if (cardNumber) gsap.to(cardNumber, { scale: 1, boxShadow: '0 0 20px rgba(102, 217, 239, 0.2)', duration: 0.3 });
        });

        if (window.matchMedia('(min-width: 768px)').matches) {
            gsap.set(card, { transformPerspective: 1000 });
            const rotateXTo = gsap.quickTo(card, 'rotateX', { duration: 0.2, ease: 'power2.out' });
            const rotateYTo = gsap.quickTo(card, 'rotateY', { duration: 0.2, ease: 'power2.out' });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const rotateX = (e.clientY - rect.top - rect.height / 2) / 20;
                const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 20;
                rotateXTo(rotateX);
                rotateYTo(rotateY);
            });
            card.addEventListener('mouseleave', () => {
                rotateXTo(0);
                rotateYTo(0);
            });
        }
    });

    // ================================
    // COOKIE BANNER
    // ================================
    function initCookieBanner() {
        if (localStorage.getItem('applylogics_cookies_accepted')) return;

        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <h3>🍪 Cookie Settings</h3>
                <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn cookie-accept">Accept</button>
                <button class="cookie-btn cookie-decline">Decline</button>
            </div>
        `;
        document.body.appendChild(banner);

        setTimeout(() => banner.classList.add('visible'), 1000);

        const acceptBtn = banner.querySelector('.cookie-accept');
        const declineBtn = banner.querySelector('.cookie-decline');

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('applylogics_cookies_accepted', 'true');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500);
        });

        declineBtn.addEventListener('click', () => {
            localStorage.setItem('applylogics_cookies_accepted', 'false');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500);
        });
    }

    // ================================
    // INITIALIZATION
    // ================================
    initTacticalCursor();
    initPreloader();
    initCircuitLines();
    initCookieBanner();

    // Glitch elements hover
    document.querySelectorAll('.glitch-text').forEach(el => {
        el.addEventListener('mouseenter', () => glitchText(el));
    });

    // Social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.15, rotate: 5, duration: 0.3 }));
        icon.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3 }));
    });

    // Random Glitch
    if (motionSettings.randomGlitch) {
        const scheduleRandomGlitch = () => {
            const delay = motionSettings.randomGlitchMin + Math.random() * motionSettings.randomGlitchRange;
            setTimeout(() => {
                const targets = document.querySelectorAll('.section-title');
                if (targets.length && Math.random() > 0.5) {
                    const target = targets[Math.floor(Math.random() * targets.length)];
                    gsap.to(target, { textShadow: '-3px 0 #f92672, 3px 0 #66d9ef', duration: 0.05 });
                    setTimeout(() => gsap.to(target, { textShadow: 'none', duration: 0.05 }), 120);
                }
                scheduleRandomGlitch();
            }, delay);
        };
        scheduleRandomGlitch();
    }

    // Page reveal
    gsap.from('body', { opacity: 0, duration: 0.4 });

    // Parallax
    if (window.matchMedia('(min-width: 768px)').matches && motionSettings.parallax) {
        gsap.to('.cyber-grid', { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }, y: 100, opacity: 0.3 });
        gsap.to('.floating-elements', { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }, y: 50 });
    }
});
