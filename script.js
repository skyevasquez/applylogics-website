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

            // Animate menu items
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
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        // Master timeline for hero
        const heroTL = gsap.timeline({ delay: 0.2 });

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
                        // Store original text before any animation
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

        // Animate hero visual elements
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

        // Animate floating elements
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

        // Scroll indicator
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

        // Start typing after hero animation
        setTimeout(typeCommand, 2500);
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
    // Track active glitch animations to prevent overlapping
    const activeGlitchElements = new Set();

    function glitchText(element) {
        // Prevent multiple animations on same element
        if (activeGlitchElements.has(element)) return;

        activeGlitchElements.add(element);

        const originalText = element.textContent || element.dataset.originalText;
        // Store original text in case it gets corrupted
        if (!element.dataset.originalText) {
            element.dataset.originalText = originalText;
        }

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?<>[]{}';
        let iterations = 0;
        const maxIterations = originalText.length;
        let intervalId = null;

        // Safety timeout - always restore original text after max time
        const safetyTimeout = setTimeout(() => {
            if (intervalId) clearInterval(intervalId);
            element.textContent = element.dataset.originalText || originalText;
            activeGlitchElements.delete(element);
        }, 2000); // Max 2 seconds for any glitch animation

        intervalId = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((letter, index) => {
                    if (letter === ' ') return ' ';
                    if (index < iterations) {
                        return originalText[index];
                    }
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
        }, 30);
    }

    // ================================
    // SCROLL TRIGGERED ANIMATIONS
    // ================================

    // Section titles
    gsap.utils.toArray('.section-title, .focus-section h2, .partners-section h2').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: config.easing.smooth,
            onComplete: () => {
                if (title.classList.contains('section-title')) {
                    glitchText(title);
                }
            }
        });
    });

    // Section subtitles
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

    // Service cards with stagger
    const valueCards = gsap.utils.toArray('.value-item');
    if (valueCards.length) {
        // Set initial state
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
                delay: (index % 3) * 0.1, // Reset delay for each row
                ease: config.easing.smooth
            });
        });
    }

    // Focus/Solution cards
    const focusCards = gsap.utils.toArray('.focus-item');
    if (focusCards.length) {
        // Set initial state
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

    // Testimonials
    const testimonials = gsap.utils.toArray('.testimonial');
    if (testimonials.length) {
        // Set initial state
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
                delay: (index % 2) * 0.15, // Stagger per row
                ease: config.easing.smooth
            });
        });
    }

    // Testimonials CTA
    const testimonialsCta = document.querySelector('.testimonials-cta');
    if (testimonialsCta) {
        gsap.from(testimonialsCta, {
            scrollTrigger: {
                trigger: testimonialsCta,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: config.easing.smooth
        });
    }

    // ================================
    // CARD HOVER EFFECTS WITH GSAP
    // ================================
    const cards = document.querySelectorAll('.value-item, .focus-item');

    cards.forEach(card => {
        const cardNumber = card.querySelector('.value-number');

        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                ease: config.easing.smooth
            });

            if (cardNumber) {
                gsap.to(cardNumber, {
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(102, 217, 239, 0.5)',
                    duration: 0.3
                });
            }
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: config.easing.smooth
            });

            if (cardNumber) {
                gsap.to(cardNumber, {
                    scale: 1,
                    boxShadow: '0 0 20px rgba(102, 217, 239, 0.2)',
                    duration: 0.3
                });
            }
        });

        // 3D tilt effect on desktop
        if (window.matchMedia('(min-width: 768px)').matches) {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                gsap.to(this, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        }
    });

    // ================================
    // MAGNETIC BUTTON EFFECT
    // ================================
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(this, {
                x: x * 0.25,
                y: y * 0.25,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });

    // ================================
    // GLITCH TEXT HOVER EFFECT
    // ================================
    const glitchElements = document.querySelectorAll('.glitch-text');

    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            glitchText(this);
        });
    });

    // ================================
    // FOOTER ANIMATION
    // ================================
    const footerSections = gsap.utils.toArray('.footer-section');
    footerSections.forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: config.easing.smooth
        });
    });

    // ================================
    // SOCIAL ICONS ANIMATION
    // ================================
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.15,
                rotate: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        icon.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ================================
    // RANDOM GLITCH EFFECT (CYBERPUNK FEEL)
    // ================================
    function randomGlitch() {
        // Only do RGB split effect on section titles, not hero title
        const glitchTargets = document.querySelectorAll('.section-title');
        if (glitchTargets.length) {
            const randomTarget = glitchTargets[Math.floor(Math.random() * glitchTargets.length)];

            // Quick RGB split effect (visual only, no text change)
            gsap.to(randomTarget, {
                textShadow: '-3px 0 #f92672, 3px 0 #66d9ef',
                duration: 0.05
            });

            setTimeout(() => {
                gsap.to(randomTarget, {
                    textShadow: 'none',
                    duration: 0.05
                });
            }, 100);
        }
    }

    // Trigger random glitch every 6-10 seconds
    setInterval(() => {
        if (Math.random() > 0.5) {
            randomGlitch();
        }
    }, 6000 + Math.random() * 4000);

    // ================================
    // PAGE LOAD EFFECT
    // ================================
    gsap.from('body', {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
    });

    // ================================
    // PARALLAX ON SCROLL
    // ================================
    if (window.matchMedia('(min-width: 768px)').matches) {
        gsap.to('.cyber-grid', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            opacity: 0.3
        });

        gsap.to('.floating-elements', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 50
        });
    }

    // ================================
    // REDUCED MOTION SUPPORT
    // ================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(10);
        ScrollTrigger.getAll().forEach(st => st.disable());
    }

    // ================================
    // ADD CYBER SCANLINE
    // ================================
    const scanline = document.createElement('div');
    scanline.className = 'cyber-scanline';
    document.body.appendChild(scanline);

    // ================================
    // CHAT INTERFACE ANIMATION (Contact Page)
    // ================================
    const chatMessages = document.getElementById('chatMessages');

    if (chatMessages) {
        const conversation = [
            { type: 'received', text: "👋 Hi there! Welcome to ApplyLogics. How can we help you today?" },
            { type: 'sent', text: "Hi! I'm interested in building a new website for my business." },
            { type: 'received', text: "That's great! We'd love to help. What kind of business do you have?" },
            { type: 'sent', text: "I run a tech startup and need a modern, professional site." },
            { type: 'received', text: "Perfect! We specialize in exactly that. Would you like to schedule a free consultation?" },
            { type: 'sent', text: "Yes, that sounds great! 🎉" },
            { type: 'received', text: "Excellent! Reach us at hello@applylogics.com or call 352-325-1006. We respond within 24 hours!" }
        ];

        let messageIndex = 0;
        let isAnimating = false;
        let typingElement = null;

        function showTypingIndicator() {
            return new Promise((resolve) => {
                typingElement = document.createElement('div');
                typingElement.className = 'chat-message typing';
                typingElement.innerHTML = `
                    <div class="typing-indicator">
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                    </div>
                `;
                chatMessages.appendChild(typingElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                setTimeout(() => {
                    if (typingElement && typingElement.parentNode) {
                        typingElement.remove();
                    }
                    typingElement = null;
                    resolve();
                }, 1500);
            });
        }

        function addMessage(msg) {
            return new Promise((resolve) => {
                const messageEl = document.createElement('div');
                messageEl.className = `chat-message ${msg.type}`;
                messageEl.textContent = msg.text;
                messageEl.style.opacity = '0';
                chatMessages.appendChild(messageEl);

                // Animate with GSAP
                gsap.to(messageEl, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                    onComplete: resolve
                });

                gsap.from(messageEl, {
                    y: 15,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
        }

        async function playNextMessage() {
            if (isAnimating) return;
            isAnimating = true;

            const msg = conversation[messageIndex];

            // Show typing indicator before received messages
            if (msg.type === 'received' && messageIndex > 0) {
                await showTypingIndicator();
            }

            // Add the message
            await addMessage(msg);

            // Wait before next message
            const waitTime = msg.type === 'sent' ? 2000 : 2500;

            messageIndex++;

            if (messageIndex < conversation.length) {
                setTimeout(() => {
                    isAnimating = false;
                    playNextMessage();
                }, waitTime);
            } else {
                // Conversation complete - wait then restart
                setTimeout(() => {
                    // Fade out all messages
                    gsap.to('.chat-message', {
                        opacity: 0,
                        y: -10,
                        stagger: 0.1,
                        duration: 0.3,
                        onComplete: () => {
                            chatMessages.innerHTML = '';
                            messageIndex = 0;
                            isAnimating = false;
                            setTimeout(playNextMessage, 1000);
                        }
                    });
                }, 5000); // Wait 5 seconds before restarting
            }
        }

        // Start conversation after initial delay
        setTimeout(playNextMessage, 2000);

        // Animate chat interface entrance
        gsap.from('.chat-interface', {
            opacity: 0,
            x: 60,
            rotateY: -15,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });
    }
});
