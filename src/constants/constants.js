export const certif = [
  {
    title: "Javascript ( React, Jquery )",
    description:
      `J'ai réalisé plusieurs certifications se basant sur javascript, une première pour 
      apprendre les bases du langage, une deuxième pour apprendre JQuery qui est du sucre syntaxique ayant pour but
      de faciliter le développement, enfin une troisième sur React dans le cadre de mon alternance.`,
    image: "/images/js.jpg",
    source: "https://openclassrooms.com/fr/courses/7008001-debutez-avec-react",
    id: 0,
  },
  {
    title: "Search Engine Optimization",
    description:
      `Le SEO est l'ensemble des pratiques permettant à un site d'avoir un bon référencement sur les moteurs de recherche,
      les maitriser est donc essentiel pour un développeur web afin de rendre son site le plus visible possible.`,
    image: "/images/Seo.webp",
    source: "https://openclassrooms.com/fr/courses/5561431-augmentez-votre-trafic-grace-au-referencement-naturel-seo",
    id: 1,
  },
  {
    title: "Veille en cybersécurité",
    description:
      `Savoir faire une veille en cybersécurité est nécessaire pour pouvoir disposer des dernières alertes. 
      Lors de cette formation j'ai pu découvrir les sites références ainsi que les divers évènements nationaux et mondiaux.`,
    image: "/images/cyber.jpg",
    source: "https://openclassrooms.com/fr/courses/1733741-effectuez-votre-veille-en-cybersecurite",
    id: 2,
  },
  {
    title: "Cisco Networking Essentials",
    description:
      `Certification proposée par la société Cisco, un acteur important du monde du réseau, elle permet
      d'acquérir une culture et une base solides des concepts touchant aux réseaux informatiques.`,
    image: "/images/cisco.jpeg",
    source: "https://drive.google.com/file/d/1o1X61kerWdirOV3tcWxGFBer2dQ2YVpt/view?usp=sharing",
    id: 3,
  },
  {
    title: "ANSSI Cybersécurité",
    description:
      `Formation proposée par l'agence nationale de la sécurité des SI, elle offre un panorama des
      risques encourus ainsi qu'une sensibilisation sur les mesures à prendre afin de s'en protéger.`,
    image: "/images/anssi.jpg",
    source: "https://drive.google.com/file/d/1W4tZSJRjF5afQCbtGII-FfNtmBb-MwbZ/view?usp=sharing",
    id: 4,
  },
  {
    title: "Initiation à l'intelligence artificielle",
    description:
      `Formation en ligne permettant d'appréhender les différents concepts théoriques entourant
      l'intelligence artificielle et d'identifier ses défis et ses opportunités. `,
    image: "/images/IA.webp",
    source: "https://www.fun-mooc.fr/fr/cours/lintelligence-artificielle-avec-intelligence/",
    id: 5,
  }
]

export const projects = [
  {
    title: "Prevn - Livequizz",
    description:
      `Le Livequizz Prevn a pour but de proposer une expérience ludique et interactive auprès des utilisateurs, le manager gère la partie depuis le site tandis
      que les joueurs utilisent leurs téléphones, la connexion entre eux est gérée par les webSockets.`,
    image: "/images/prevn.png",
    tags: ["WebSocket", "MariaDB", "React", "React-Native", "Adonis"],
    domain: ["BackEnd", "FrontEnd", "API", "Base de données", "Mobile"],
    source: "https://mening-app.herokuapp.com/",
    visit: "https://gitlab.com/Prevn",
    id: 0,
  },
  {
    title: "e-combox Bureau",
    description:
      `L'application e-combox bureau permet un lancement et une administration simplifiés de la solution sur un environnement Windows , l'utilisation du
      framework .net, de WPF et de Powershell permet de tirer pleinement profit de cet OS.`,
    image: "/images/ecombox.png",
    tags: ["C#", "Framework .net", "WPF", "Powershell", "Docker"],
    domain: ["Client riche"],
    visit: "https://gitlab.com/e-combox/e-comBox_appDesktopWindows",
    id: 1,
  },
  {
    title: "Geststages React",
    description:
      `Gestages est une application initialement développée en PHP et servant aux étudiants à trouver des stages de façon plus efficace, 
      le but du projet a été de le refactoriser en React tout en utilisant GraphQL.`,
    image: "/images/gestages.png",
    tags: ["React", "GraphQL"],
    domain: ["Front-end", "API", "Back-end"],
    visit: "https://gitlab.com/siollb/geststages",
    id: 2,
  },
  {
    title: "Network Manager",
    description:
      `Network Manager est une application web proposant une interface de création, suppression, modification des règles de redirection dans le réseau local.
      elle utilise le framework PHP Laravel et se sert de script bash pour les requêtes DNS.`,
    image: "/images/network.png",
    tags: ["PHP", "Script Shell", "Laravel", "DNS"],
    domain: ["Front-end", "Back-end", "API par script"],
    visit: "https://gitlab.com/siollb/NetworkManager",
    id: 3,
  },
  {
    title: "NFC Card reader",
    description:
      `Création via l'utilisation d'une Raspberry Pi 2 et du module explorenfc d'un lecteur de carte NFC
      permettant de déterminer l'heure d'arrivée et de départ de leur propriétaire.`,
    image: "/images/nfc.png",
    tags: ["Python", "NFC", "SQLite"],
    domain: ["Hardware", "Base de données"],
    visit: "https://docs.google.com/document/d/1MgXjQGz6IS-La1yJs-5YyTwFNztq8RR3A0CgNvaLpsI/edit?usp=sharing",
    id: 4,
  },
  
];

export const articles = [
  {
    title: "Faille Log4j",
    description:
      `Log4j est une faille découverte en décembre visant la bibliothèque de journalisation du même nom, 
      cette vulnérabilité peut permettre à un attaquant de provoquer une exécution de code arbitraire à distance.`,
    image: "/images/log4j.webp",
    tags: ["Apache2, Log4j, Java, Faille"],
    domain: ["Cybersécurité, Développement"],
    visit: "https://www.zdnet.fr/actualites/une-grave-faille-zero-day-dans-la-bibliotheque-java-log4j-est-deja-exploitee-39933997.htm",
    id: 0,
  },
  {
    title: "Les principes SOLID",
    description:
    `Ces 5 principes sont des lignes de conduite à respecter afin que son application reste facilement modifiable
    et éviter une dette technique trop lourde.`,
    image:"/images/solid.png",
    visit: "https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898",
  },
  {
    title: "L'IA dépasse encore une frontière",
    description:
    `Le bridge est un jeu de cartes demandant du raisonnement et de la communication, il était l'un des remparts de l'avancement
    de l'intelligence artificielle. Cependant, Nukk a réussi à passer ce palier en battant plusieurs champions du monde.`,
    image:"/images/nukk.png",
    visit: "https://www.leparisien.fr/video/video-une-intelligence-artificielle-bat-pour-la-premiere-fois-des-champions-du-monde-de-bridge-et-cest-un-exploit-09-04-2022-NXAVPB6RGFEJRKXNZ252WL6RFQ.php",
  },
  { title: "LPWAN, le réseau de l'IoT",
    description:
    `Avec le développement de l'internet des objets, un nouveau type de réseau a émergé. Les réseaux LPWAN sont moins puissants que les 
    réseaux traditionnels mais ont une plus longue portée pour un coût inférieur, parfait pour l'IoT.`,
    image: "/images/LPWAN.jpg",
    visit: "https://www.journaldunet.fr/web-tech/dictionnaire-de-l-iot/1440678-lpwan-quelles-caracteristiques-et-quels-reseaux-pour-le-bas-debit/",
}
]


export const TimeLineData = [
  { year: 2002, text: "Début de mon existence" },
  {
    year: "2017 - 2020",
    text: "Etude générale en science de l'ingénieur",
  },
  { year: "2020 - 2022",
    text: "BTS SIO, option SLAM"
  }
];
