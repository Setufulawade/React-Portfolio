import self from "../img/self.png";
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;


export const info = {
    firstName: "Setu",
    lastName: "Fulawade",
    initials: "SF",
    position: "A Fourth year computer Engineer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Intern At NCRA.GMRT"
        },
        {
            emoji: "📧",
            text: "setufulawademain@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/setufulawade/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Setufulawade",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/setu-fulawade-49653b242/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/FulawadeSe75378",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a 4th-year BE Computer Engineering student with hands-on experience in software development, full-stack web development, Docker, Spring Boot, and REST APIs. I interned at NCRA-GMRT for three months, where I worked on the 15-meter radio antenna software compilation using Docker",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'python', 'java', 'docker'],
            exposedTo: ['IOT','ML/AI:', 'mongodb','MySql']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'anime',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Video Gaming',
            emoji: '🎮'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "CMS Software Compilation using Docker",
            source: "https://github.com/Setufulawade/cms-15m-linux-scripts-GMRT", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Data Analysis using python",
            source: "https://github.com/Setufulawade/Data-Analysis-using-python",
            image: mock2
        },
        {
            title: "Battery Conservation Mode For ideapad Laptop",
            source: "https://github.com/Setufulawade/Battery-Conservation-Mode-For-ideapad-Laptop",
            image: mock5
        }
    ]
}
