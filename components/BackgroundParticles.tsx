
import React, { useRef, useEffect } from 'react';

const BackgroundParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() * 0.5 - 0.25);
                this.speedY = (Math.random() * 0.5 - 0.25);
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                ctx!.fillStyle = 'rgba(88, 166, 255, 0.5)';
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = Math.sqrt(
                        Math.pow(particles[a].x - particles[b].x, 2) + 
                        Math.pow(particles[a].y - particles[b].y, 2)
                    );
                    if (distance < 120) {
                        opacityValue = 1 - (distance / 120);
                        ctx!.strokeStyle = `rgba(88, 166, 255, ${opacityValue})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[a].x, particles[a].y);
                        ctx!.lineTo(particles[b].x, particles[b].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', resizeCanvas);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default BackgroundParticles;
