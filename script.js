//Scroll detection
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav ul li.non_hidden a');

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                navItems.forEach((navItem) => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});
//splitter of texts for the animation welcome page
const welcomeText = document.querySelector('.text p');
const welcomeChars = welcomeText.innerText.split('');
const welcomeRadius = 50;

welcomeText.innerHTML = welcomeChars.map((char, i) => {
    const angle = (i / welcomeChars.length) * 2 * Math.PI;
    const x = welcomeRadius * Math.cos(angle);
    const y = welcomeRadius * Math.sin(angle);
    
    const letterRotation = angle + Math.PI / 2;

    return `<span style="transform: translate(${x}px, ${y}px) rotate(${letterRotation}rad)">${char}</span>`;
}).join('');

//reveal button1
document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'black';
});

//splitter of texts for the animation about page
const aboutText = document.querySelector('.text1 p');
const aboutChars = aboutText.innerText.split('');
const aboutRadius = 50;

aboutText.innerHTML = aboutChars.map((char, i) => {
    const angle = (i / aboutChars.length) * 2 * Math.PI;
    const x = aboutRadius * Math.cos(angle);
    const y = aboutRadius * Math.sin(angle);
    
    const letterRotation = angle + Math.PI / 2;

    return `<span class="span1" style="transform: translate(${x}px, ${y}px) rotate(${letterRotation}rad)">${char}</span>`;
}).join('');


document.getElementById('unrevealButton1').addEventListener('click', function() {
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'white';
});



document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('aboutPage').classList.add('active');
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementById('unrevealButton1').addEventListener('click', function() {
    document.getElementById('aboutPage').classList.remove('active');
    document.getElementById('welcomePage').classList.add('active');
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'block';
    document.body.style.overflow = '';
});

//=================Projects Revealer

//website development
document.addEventListener('DOMContentLoaded', function() {
    const Website_development = document.querySelector('.Projects .super_container .wrapper1 .Website_development');
    const ulElements = document.querySelector('.Projects .super_container .wrapper1 .websites ul');

    Website_development.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//mobile development

document.addEventListener('DOMContentLoaded', function() {
    const mobile_development = document.querySelector('.Projects .super_container .wrapper1 .mobile_development');
    const ulElements = document.querySelector('.Projects .super_container .wrapper1 .mobile_apps ul');

    mobile_development.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//System Engineering
document.addEventListener('DOMContentLoaded', function() {
    const system_engineering = document.querySelector('.Projects .super_container .wrapper2 .system_engineering');
    const ulElements = document.querySelector('.Projects .super_container .wrapper2 .system ul');

    system_engineering.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

// Algorithms
document.addEventListener('DOMContentLoaded', function() {
    const algorithms = document.querySelector('.Projects .super_container .wrapper2 .algorithms');
    const ulElements = document.querySelector('.Projects .super_container .wrapper2 .algo ul');

    algorithms.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//Database Engineering
document.addEventListener('DOMContentLoaded', function() {
    const database_engineering = document.querySelector('.Projects .super_container .wrapper3 .Database_Engineering');
    const ulElements = document.querySelector('.Projects .super_container .wrapper3 .database ul');

    database_engineering.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

// LOW LEVEL PROGRAMMING
document.addEventListener('DOMContentLoaded', function() {
    const low_level_programming = document.querySelector('.Projects .super_container .wrapper3 .low_level_programing');
    const ulElements = document.querySelector('.Projects .super_container .wrapper3 .low_level ul');

    low_level_programming.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});


//=================SKILLS PROJECT REVEALER
//Frontend
document.addEventListener('DOMContentLoaded', function() {
    const Frontend_development = document.querySelector('.Skills .super_container2 .Frontend_development');
    const ulElements = document.querySelector('.Skills .super_container2 .front ul');

    Frontend_development.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//Backend
document.addEventListener('DOMContentLoaded', function() {
    const Backend_development = document.querySelector('.Skills .super_container2 .Backend_development');
    const ulElements = document.querySelector('.Skills .super_container2 .back ul');

    Backend_development.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//Database
document.addEventListener('DOMContentLoaded', function() {
    const Database_Skills = document.querySelector('.Skills .super_container2 .databases_skills');
    const ulElements = document.querySelector('.Skills .super_container2 .data ul');

    Database_Skills.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});

//tools
document.addEventListener('DOMContentLoaded', function() {
    const Database_Skills = document.querySelector('.Skills .super_container2 .tools');
    const ulElements = document.querySelector('.Skills .super_container2 .tls ul');

    Database_Skills.addEventListener('click', function() {
        if (ulElements.style.display === 'none' || ulElements.style.display === '') {
            ulElements.style.display = 'block';
        } else {
            ulElements.style.display = 'none';
        }
    });
});


//==================Email sender

document.querySelector('.send_button').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.querySelector('.name_holder').value;
    var email = document.querySelector('.email_holder').value;
    var message = document.querySelector('.message_holder').value;

    var mailtoLink = `mailto:uavellinbonaparte@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
});

