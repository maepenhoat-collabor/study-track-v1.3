// Study Track - Authentification
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token && !window.location.pathname.includes('index.html')) {
        window.location.href = '/';
    }
}

function logout() {
    localStorage.clear();
    window.location.href = '/';
}

// Vérifier l'authentification au chargement
checkAuth();
