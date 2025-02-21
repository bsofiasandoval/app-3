'use client'
import React, { useState } from 'react';

export default function Page2() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const [displayName, setDisplayName] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        let errors = { name: '', email: '', password: '' };

        if (name.length < 1) {
            errors.name = 'Nombre debe tener al menos 1 caracter';
            valid = false;
        }

        if (!validateEmail(email)) {
            errors.email = 'Correo electrónico inválido';
            valid = false;
        }

        if (password.length < 1) {
            errors.password = 'Contraseña debe tener al menos 1 caracter';
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            // Handle successful sign up
            console.log('Sign up exitoso!');
            setDisplayName(name);
        }
    };

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white', color: 'black' }}>
            {displayName && (
                <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'lightgray', padding: '10px', borderRadius: '4px' }}>
                    Welcome, {displayName}!
                </div>
            )}
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingresa tu nombre"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}></div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electronico:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu email"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
            </form>
            <style jsx>{`
                .error {
                    color: red;
                    font-size: 12px;
                    margin-top: 5px;
                }
            `}</style>
        </div>
    );
};
