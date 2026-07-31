const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e)=>{

    pupils.forEach(pupil => {

        const eye = pupil.parentElement;

        const rect = eye.getBoundingClientRect();

        const eyeX = rect.left + rect.width/2;
        const eyeY = rect.top + rect.height/2;

        const angle = Math.atan2(
            e.clientY-eyeY,
            e.clientX-eyeX
        );

        const radius = 5;

        const x = Math.cos(angle)*radius;
        const y = Math.sin(angle)*radius;

        pupil.style.transform =
            `translate(${x}px, ${y}px)`;
    });

});