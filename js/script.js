const sectionIds = ["home","about","experience","projects","links"];
function showSection(id){
    sectionIds.forEach(sec=>document.getElementById(sec).classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove("active"));
    document.querySelectorAll('.nav-link').forEach(l=>{
        if(l.textContent.toLowerCase()===id) l.classList.add("active");
    });
    if(id !== "projects") document.getElementById("proj-details").style.display="none";
}

// Typewriter effect for homepage
const typewriterText = [
    "Java Developer",
    "Web Developer",
    "Project Enthusiast",
    "Finance Learner",
    "UI Tester",
    "Cloud Explorer"
];
let twIdx = 0, charIdx = 0, typeInterval;
function runTypewriter() {
    const twElem = document.getElementById("typewriter");
    if (!twElem) return;
    twElem.innerHTML = "";
    typeInterval = setInterval(() => {
        if(charIdx < typewriterText[twIdx].length){
            twElem.innerHTML += typewriterText[twIdx][charIdx++];
        } else {
            setTimeout(() => {
                charIdx = 0;
                twElem.innerHTML = "";
                twIdx = (twIdx+1)%typewriterText.length;
            }, 900);
        }
    }, 90);
}

// Project details (update as you want)
const projects = [
    {
        title: 'Online Book Store',
        details: `<b>Stack:</b> Java, SQL, HTML5, CSS3, JS<br>
        <a href="https://github.com/Vishnu-Dantuluri/OnlineBookStore" target="_blank" style="color:#aad7fa; font-weight:bold; display:inline-block; margin-top:3px;">
                            View Project on GitHub </a>
           <li>Developed a user-centric online bookstore featuring seamless browsing, purchasing, and book management functionality.</li>
           <li>Implemented a modern, responsive frontend and robust backend logic to deliver a smooth reading and buying experience.</li>`
    },
    {
        title: 'Respiration Real-Time Monitoring',
        details: `<b>Stack:</b> Arduino, Think Cloud<br>
        Developed a positive-pressure ventilation real-time health system, cloud-integrated data monitoring.`
    },
    {
        title: 'Portfolio Website <a href="https://vishnu-dantuluri.github.io/P-V" target="_blank" style="color:#7dfffd; font-weight:normal;">[Live Site]</a>',
        details: `<b>Stack:</b> HTML5, CSS, JS<br>
        • Designed and built a personal website to showcase my technical skills, <b>creativity</b>, and <b>storytelling</b> ability.<br>
        • Demonstrated a passion for technology and <b>visual presentation</b> through a thoughtfully crafted digital space.<br>
        • As an avid photographer and freelancer, I enjoy capturing people and beautiful frames that tell a story—connect with me directly through my dedicated Instagram page.`
    }
];
function openProject(idx){
    const el=document.getElementById("proj-details");
    el.innerHTML = `<b>${projects[idx].title}</b><br>${projects[idx].details}`;
    el.style.display="block";
}

window.onload = () => {
    showSection('home');
    runTypewriter();
};