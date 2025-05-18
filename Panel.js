document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('container');
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileSignIn = document.getElementById('mobileSignIn');
            const mobileSignUp = document.getElementById('mobileSignUp');

            // Check if we're on mobile and adjust the UI
            function checkMobile() {
                if (window.innerWidth <= 768) {
                    mobileNav.style.display = 'flex';
                } else {
                    mobileNav.style.display = 'none';
                }
            }

            // Initial check
            checkMobile();

            // Listen for resize events
            window.addEventListener('resize', checkMobile);

            // Desktop panel switching
            signUpButton.addEventListener('click', () => {
                container.classList.add('right-panel-active');
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove('right-panel-active');
            });

            // Mobile panel switching
            mobileSignUp.addEventListener('click', () => {
                container.classList.add('right-panel-active');
                mobileSignUp.classList.add('active');
                mobileSignIn.classList.remove('active');
            });

            mobileSignIn.addEventListener('click', () => {
                container.classList.remove('right-panel-active');
                mobileSignIn.classList.add('active');
                mobileSignUp.classList.remove('active');
            });

            // Form validation (basic example)
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const inputs = form.querySelectorAll('input');
                    let isValid = true;
                    
                    inputs.forEach(input => {
                        if (!input.value.trim()) {
                            isValid = false;
                            input.style.borderColor = '#ff3860';
                            setTimeout(() => {
                                input.style.borderColor = '#ddd';
                            }, 3000);
                        }
                    });
                    
                    if (isValid) {
                        // Here you would typically send data to server
                        alert('Form submitted successfully!');
                        form.reset();
                    }
                });
            });

            // Add smooth input focus effect
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                input.addEventListener('blur', function() {
                    if (!this.value) {
                        this.parentElement.classList.remove('focused');
                    }
                });
            });
        });