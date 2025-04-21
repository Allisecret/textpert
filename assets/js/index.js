document.addEventListener('DOMContentLoaded', function() {
    // signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // This is crucial to stop the form from submitting traditionally

            const firstName = signupForm.firstName.value.trim();
            const lastName = signupForm.lastName.value.trim();
            const companyName = signupForm.companyName.value.trim();
            const industry = signupForm.industry.value.trim();
            const email = signupForm.email.value.trim();
            const phoneNumber = signupForm.phoneNumber.value.trim();
            const address = signupForm.address.value.trim();
            const zipCode = signupForm.zipCode.value.trim();
            const password = signupForm.password.value.trim();
            const confirmPassword = signupForm.confirmPassword.value.trim();

            console.log(zipCode,password);

            if (!phoneNumber || !password) {
                alert('Please enter both phone number and password.');
                return;
            }

            try {
                const response = await fetch('https://get-connected-backend.dev.quantumos.ai/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ firstName,lastName,companyName,industry,email,phoneNumber,address,zipCode,password,confirmPassword})
                });

                const data = await response.json();
                console.log('Login response:', data);

                if (response.ok && data ?.data ?.token) {
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('userInfo', JSON.stringify(data.data.user));
                    localStorage.setItem("isLoggedIn", true);
                    window.location.href = 'index.html';
                    alert('Login Successful!')
                    alert(data.message || 'Login failed.');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('An error occurred during login.');
            }
        });
    }
    // login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // This is crucial to stop the form from submitting traditionally

            const email = loginForm.email.value.trim();
            const password = loginForm.password.value.trim();

            if (!email || !password) {
                alert('Please enter both email address and password.');
                return;
            }

            try {
                const response = await fetch('https://get-connected-backend.dev.quantumos.ai/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                console.log('Login response:', data);

                if (response.ok && data ?.data ?.token) {
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('userInfo', JSON.stringify(data.data.user));
                    localStorage.setItem("isLoggedIn", true);
                    window.location.href = 'index.html';
                    alert('Login Successful!')
                    alert(data.message || 'Login failed.');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('An error occurred during login.');
            }
        });
    }
});