import React, { useState } from 'react';
import '../assets/style_login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log('Login réussi', data);

            // 🔁 Redirection vers page statique dans public/
            window.location.href = '/index_hub.html';
        } else {
            const text = await res.text();
            setMessage(text || 'Erreur lors de la connexion');
        }
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            {message && <p className="error">{message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoFocus
                />

                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}

export default Login;
