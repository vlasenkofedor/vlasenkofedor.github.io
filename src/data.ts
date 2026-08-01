import type {
  IntroInfo,
  SocialMediaItem,
  ContactItem,
  ExperienceItem,
  EducationItem,
  VolunteerItem,
  ExampleItem,
  SkillItem,
  LanguageItem,
  InterestItem,
  ResumeData,
} from '@/types/resume'

const introInfo: IntroInfo = {
  name: 'Fedor Vlasenko',
  title: 'CTO & Tech Lead',
  location: 'Kyiv, Ukraine',
  description: '',
  image: 'fedor.png',
}

const socialMediaInfo: SocialMediaItem[] = [
  {
    icon: 'fas fa-code',
    link: 'https://www.codewars.com/users/VlasenkoFedor',
    username: 'VlasenkoFedor',
    displayName: 'codewars/VlasenkoFedor',
  },
  {
    icon: 'fab fa-linkedin',
    link: 'https://linkedin.com/in/fedor-vlasenko',
    username: 'fedor-vlasenko',
    displayName: 'linkedin/fedor-vlasenko',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/vlasenkofedor',
    username: 'vlasenkofedor',
    displayName: 'github/vlasenkofedor',
  },
]

const contactInfo: ContactItem[] = [
  {
    icon: 'fas fa-envelope',
    context: 'vlasenkofedor@gmail.com',
    style: 'font-size:23px;margin-right: 10px;',
    link: 'mailto:vlasenkofedor@gmail.com',
  },
  {
    icon: 'fas fa-square-phone',
    context: '+380674248788',
    style: 'font-size:23px;margin-right: 10px;',
    link: 'tel:+380674248788',
  },
  {
    icon: 'fab fa-telegram',
    context: '@VlasenkoFedor',
    style: 'font-size:23px;margin-right: 10px;',
    link: 'https://t.me/VlasenkoFedor',
  },
]

const summaryInfo =
  'CTO and Engineering Leader with 10+ years of experience building scalable backend architectures, high-load microservices, and web platforms using JavaScript, TypeScript, PHP, Go, and Rust. Passionate about system design, real-time media processing, and blockchain tech. Software engineering has been both my profession and lifelong passion for over 20 years.'

const experinceInfo: ExperienceItem[] = [
  {
    workAt: 'TECHWHIRL',
    link: 'https://techwhirl.io',
    position: 'CTO',
    duration: 'May 2024 – Present',
    description:
      '• Architected and led the development of a high-performance crypto wallet and P2P exchange platform on the TRON blockchain.<br/>' +
      '• Integrated AI models and LLM tooling to optimize developer workflows and accelerate delivery timelines.<br/>' +
      '• Performed in-depth code reviews and architectural audits, delivering actionable guidance to improve code quality and production readiness.',
    techs: [
      'Node.js',
      'Rust',
      'Fastify',
      'Sequelize',
      'Vue.js',
      'Quasar',
      'uWebSockets.js',
      'Kafka',
      'RabbitMQ',
      'Docker',
      'Redis',
      'PostgreSQL',
      'Grafana',
      'TRON Full Node',
      'gRPC',
      'Protobuf',
    ],
  },
  {
    workAt: 'Zeus Electronics',
    link: 'https://ze-us.xyz',
    position: 'Tech Lead & Backend Developer',
    duration: 'Sep 2015 – May 2024',
    description:
      '• Mentored software engineering teams and guided key architectural decisions for enterprise clients.<br/>' +
      '• Designed and deployed scalable text/video chat and low-latency video streaming infrastructure.<br/>' +
      '• Developed interactive gaming table engines & analytics for McDonald\'s Canadian branches.<br/>' +
      '• Engineered a specialized chromosome image processing application for Singapore Medical University.<br/>' +
      '• Built, optimized, and deployed distributed microservices and APIs on Linux infrastructure.',
    techs: [
      'Node.js',
      'Go',
      'Fastify',
      'Sequelize',
      'Vue.js',
      'Quasar',
      'Three.js',
      'Fabric.js',
      'Hyperledger Fabric',
      'uWebSockets.js',
      'WebRTC',
      'Mediasoup',
      'PHP',
      'Phalcon',
      'Yii',
      'Laravel',
      'Joomla',
      'ISPConfig',
      'RabbitMQ',
      'InfluxDB',
      'LDAP',
      'Docker',
      'MySQL',
      'Redis',
      'PostgreSQL',
      'Memcached',
      'BigQuery',
      'Firebase',
      'Linux',
    ],
  },
  {
    workAt: 'MonsterLeads',
    link: 'https://monsterleads.pro',
    position: 'Backend Developer',
    duration: 'Dec 2014 – Sep 2015',
    description:
      '• Architected OAuth authentication for affiliate partner platforms.<br/>' +
      '• Engineered an operator management, real-time monitoring, and analytics service for a Call Center system.',
    techs: ['PHP', 'Node.js', 'WebSockets', 'MySQL', 'SSH', 'Asterisk', 'AMI'],
  },
  {
    workAt: 'Sparkle Design',
    link: 'https://sparkledesign.com',
    position: 'Full Stack Developer',
    duration: 'Mar 2014 – Dec 2014',
    description:
      '• Developed web application functionality and core modules for Ukrainian banking institutions and enterprise clients.<br/>' +
      '• Refactored and modernized proprietary CMS systems used across client projects.',
    techs: ['PHP', 'JavaScript', 'jQuery', 'SQL', 'CSS3', 'Bootstrap', 'Smarty'],
  },
]

const educationInfo: EducationItem[] = [
  {
    school: 'Interregional Academy of Personnel Management',
    location: 'Kyiv, Ukraine',
    title: 'Management, Economics & Business Administration',
    duration: '1999 – 2007',
    description: '',
  },
]

const volunteerInfo: VolunteerItem[] = [
  {
    title: 'Javascript Forum',
    duration: '2013 – 2022',
    profileLink: 'https://javascript.ru/forum/members/27064-vlasenko-fedor',
  },
  {
    title: 'Joomla Forum',
    duration: '2009 – 2021',
    profileLink: 'https://joomlaforum.ru/index.php?action=profile;u=55080',
  },
  {
    title: 'Habr Q&A',
    duration: '2020 – 2022',
    profileLink: 'https://qna.habr.com/user/VlasenkoFedor',
  },
]

const examples: ExampleItem[] = [
  { title: 'TRON Scanner', link: 'https://github.com/vlasenkofedor/tron-scaner' },
  { title: 'TRON Cold Wallet Generator', link: 'https://github.com/vlasenkofedor/tron-paper-wallet' },
  { title: 'TRON Wallet Address Generator', link: 'https://github.com/vlasenkofedor/wallet_generator' },
  { title: 'Cabinet designer (demo)', link: 'https://cupboard-builder.web.app/' },
  { title: 'Joomla Admin Recovery Tool', link: 'https://github.com/vlasenkofedor/Joomla_admin_login' },
  { title: 'Joomla User Group Manager', link: 'https://github.com/vlasenkofedor/usergroup' },
  { title: 'WordPress Admin Recovery Tool', link: 'https://github.com/vlasenkofedor/wordpress_admin_login' },
  { title: 'Tic Tac Toe Algorithm (Magic Square)', link: 'https://jsfiddle.net/vlasenkofedor/5ad26zc7/' },
  { title: 'REST API Pattern Implementation', link: 'https://qna.habr.com/q/852971#answer_item_1752483' },
  { title: 'Traffic Light State Machine', link: 'https://jsfiddle.net/vlasenkofedor/vfeYv/' },
  { title: 'Tabs JS Component', link: 'https://jsfiddle.net/vlasenkofedor/jLprM/' },
]

const skillInfo: SkillItem[] = [
  { name: 'JavaScript / TypeScript', rate: 99 },
  { name: 'PHP', rate: 85 },
  { name: 'Go', rate: 60 },
  { name: 'Rust', rate: 45 },
]

const otherSkillInfo: string[] = [
  'Blockchain (TRON)',
  'Cloud Storage & AWS S3',
  'Docker & Containers',
  'Nginx & Load Balancing',
  'Network Protocols (TCP/IP, WebSockets, WebRTC)',
  'Kafka & RabbitMQ',
  'PostgreSQL & MySQL',
  'Git',
  'WebGL',
]

const proSkillInfo: string[] = [
  'Technical Leadership',
  'System Architecture',
  'Agile / Scrum',
  'Engineering Culture & Mentorship',
  'Problem Solving',
  'Team Management',
]

const languageInfo: LanguageItem[] = [
  { name: 'English', rate: 2, level: 'Intermediate' },
  { name: 'Ukrainian', rate: 5, level: 'Native' },
  { name: 'Russian', rate: 5, level: 'Native' },
]

const interestInfo: InterestItem[] = [
  {
    name: 'AI Integration',
    description: 'Integrating LLMs & AI tools into modern software engineering',
  },
  { name: 'Algorithms', description: 'Data structures & algorithm design' },
  {
    name: 'Robotics',
    description: 'Microcomputers, IoT & controllers',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:6922474088674304000',
  },
]

const resumeData: ResumeData = {
  introInfo,
  socialMediaInfo,
  contactInfo,
  summaryInfo,
  experinceInfo,
  educationInfo,
  volunteerInfo,
  examples,
  skillInfo,
  otherSkillInfo,
  proSkillInfo,
  languageInfo,
  interestInfo,
}

export default resumeData
