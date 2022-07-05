
// geomatric particles animation
let nrOfParticles = 100
let densityOfParticles = 1000
let lineColor = "#ff9d00"
let lineWidth = 1
let movementSpeed = 3

particlesJS("particles", {
    particles: {
        number: { value: nrOfParticles, density: { enable: true, value_area: densityOfParticles } },
        size: { value: 0 },
        line_linked: {
            enable: true,
            distance: 250,
            color: lineColor,
            opacity: 1,
            width: lineWidth
        },
        move: {
            enable: true,
            speed: movementSpeed,
            direction: "top",
            random: true,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 1000, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// var count_particles, stats, update;

// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };




// <!-- typed js effect starts -->
var _CONTENT = [
    "Back-end developer",
    "php developer",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Delete);




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 9000 });
srtop.reveal('.skills .container', { delay: 500 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });



// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->

    


// start about skills here 
function wordSphere(canvas, texts, counts, options) {
    const π = Math.PI; // happy math!
    const {
        width = 500,
        height = 500,
        radius = 150,
        padding = 0,
        fontSize = 22,
        tilt = 0,
        initialVelocityX = 0,
        initialVelocityY = 0,
        initialRotationX = 0,
        initialRotationZ = 0
    } = options;

    let vx = initialVelocityX,
        vy = initialVelocityY;
    let rx = initialRotationX,
        rz = initialRotationZ;

    // canvas setup
    let ctx = canvas.getContext("2d");
    ctx.textAlign = "center";

    // Hi-DPI support
    canvas.width = width * 2.2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2, 2);

    // scrolling
    let clicked = false,
        lastX,
        lastY;
    canvas.addEventListener("mousedown", (event) => {
        clicked = true;
        lastX = event.screenX;
        lastY = event.screenY;
    });
    canvas.addEventListener("mousemove", (event) => {
        if (!clicked) return;
        [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
        [lastX, lastY] = [event.screenX, event.screenY];

        // rotation update
        rz += -dy * 0.01;
        rx += dx * 0.01;

        // velocity update
        vx = dx * 0.1;
        vy = dy * 0.1;

        if (!looping) startLoop();
    });
    canvas.addEventListener("mouseup", (e) => (clicked = false));
    canvas.addEventListener("mouseleave", (e) => (clicked = false));

    function rot(x, y, t) {
        return [
            x * Math.cos(t) - y * Math.sin(t),
            x * Math.sin(t) + y * Math.cos(t)
        ];
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let ix = 0,
            iz = 0,
            i = 1;
        for (const text of texts) {
            const degZ = (π / (counts.length - 1)) * iz;
            const degX = ((2 * π) / counts[iz]) * ix;

            let x = radius * Math.sin(degZ) * Math.cos(degX);
            let y = radius * Math.sin(degZ) * Math.sin(degX);
            let z = radius * Math.cos(degZ) + 8 * (ix % 2); /* randomness */

            // camera transform
            [y, z] = rot(y, z, tilt);
            [x, z] = rot(x, z, rz);
            [x, y] = rot(x, y, rx);

            // convert to cartesian and then draw.
            const alpha = 0.6 + 0.4 * (x / radius);
            const size = fontSize + 2 + 5 * (x / radius);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.font = `${size}px "monospace"`;
            ctx.fillText(text, y + width / 2, -z + height / 2);

            ix--;
            if (ix < 0) {
                iz++;
                ix = counts[iz] - 1;
            }
            i++;
        }
    }

    // renderer
    let looping = false;
    function rendererLoop() {
        if (looping) window.requestAnimationFrame(rendererLoop);
        render();

        // deacceleration - dirty code xD
        if (vx > 0) vx = vx - 0.01;
        if (vy > 0) vy = vy - 0.01;
        if (vx < 0) vx = vx + 0.01;
        if (vy > 0) vy = vy + 0.01;
        if (vx == 0 && vy == 0) stopLoop();

        rz += vy * 0.01;
        rx += vx * 0.01;
    }

    function startLoop() {
        looping = true;
        window.requestAnimationFrame(rendererLoop);
    }

    function stopLoop() {
        looping = false;
    }
    startLoop();
}

const canvas = document.getElementById("canvas");

const texts = [
    "HTML5",
    "Javascript",
    "PHP",
    "MySql",
    "phpMyAdmin",
    "SQL",
    "PYTHON",
    "Git",
    "github",
    "Laravel",
    "CSS",
    "Responsive",
    "Bootstrap",
    "JSON",
    "SASS",
    "JQUERY",
    "JAVA",
    "C++"

];
const counts = [1, 2, 4, 5, 4, 2, 1];

const options = {
    tilt: Math.PI / 9,
    initialVelocityX: 0.09,
    initialVelocityY: 0.09,
    initialRotationX: Math.PI * 0.14,
    initialRotationZ: 0
};

wordSphere(canvas, texts, counts, options);



// work & project
async function fetchData() {
    let response
    response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}




function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 6).forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/images/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    srtop.reveal('.work .box', { interval: 700 });

}



fetchData().then(data => {
    showProjects(data);
});



// // Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat











