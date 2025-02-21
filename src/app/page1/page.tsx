'use client'
import React, { useState } from 'react';

export default function Page1() {
    const [color, setColor] = useState<string>('white');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black gap-4">
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: color,
                    marginBottom: '20px',
                }}
            ></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                    style={{ backgroundColor: 'red', padding: '10px' }}
                    onClick={() => setColor('red')}
                >
                    Red
                </button>
                <button
                    style={{ backgroundColor: 'yellow', padding: '10px' }}
                    onClick={() => setColor('yellow')}
                >
                    Yellow
                </button>
                <button
                    style={{ backgroundColor: 'green', padding: '10px' }}
                    onClick={() => setColor('green')}
                >
                    Green
                </button>
                <button
                    style={{ backgroundColor: 'blue', padding: '10px' }}
                    onClick={() => setColor('blue')}
                >
                    Blue
                </button>
            </div>
        </div>
    );
};

