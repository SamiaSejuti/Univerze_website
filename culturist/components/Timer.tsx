'use client'
import React, { useEffect, useState } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(20);

    useEffect(() => {
        const startTimer = () => {
            const timer = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds <= 1) {
                        clearInterval(timer); // stop the timer
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        };

        const modalElement = document.getElementById('my_modal_4');
        const handleModalClose = () => {
            startTimer();
        };

        if (modalElement) {
            modalElement.addEventListener('close', handleModalClose);

            return () => {
                modalElement.removeEventListener('close', handleModalClose); // cleanup
            };
        }
    }, []);

    return (
        <span className="countdown font-mono text-6xl">
            <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
    );
}
