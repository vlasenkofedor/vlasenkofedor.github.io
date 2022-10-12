const introInfo = {
    name: 'Fedor Vlasenko',
    title: 'Backend Developer',
    location: 'Kyiv, Ukraine',
    description: '',
    image: 'fedor.png',
}

//dynamic icon
const socialMediaInfo = [
    {
        name: 'certificate',
        link: 'https://www.codewars.com/users/VlasenkoFedor',
        username: 'VlasenkoFedor',
        displayName: 'codewars/VlasenkoFedor'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/fedor-vlasenko/',
        username: 'fedor-vlasenko',
        displayName: 'linkedin/fedor-vlasenko'
    },

    {
        name: 'github',
        link: 'https://github.com/vlasenkofedor',
        username: 'vlasenkofedor',
        displayName: 'github/vlasenkofedor'
    },
]


const contactInfo = [
    {
        name: 'envelope',
        context: 'vlasenkofedor@gmail.com',
        style: "font-size:23px;margin-right: 10px;",
        link: 'mailto:vlasenkofedor@gmail.com'
    },
    {
        name: 'phone-square',
        context: '+380674248788',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:+380674248788'
    },
    {
        name: 'skype',
        context: 'vlasenko.fedor',
        style: "font-size:23px;margin-right: 10px;",
        link: 'skype:vlasenko.fedor'
    },
]

const summaryInfo =
    'Hello, I am Fedor from Ukraine. I have +8 years of experience with javascript, php and go with a focus on RestAPIs, MVC and micro-services.\n' +
    'I have +5 years of experience in freelance web development. Creating  websites, components, plugins and modules.\n' +
    'Programming for me is not only a job, but also a hobby for over 20 years.'


//desc v-html
const experinceInfo = [
    {
        workAt: 'Zeus Electronics',
        link: 'https://ze-us.xyz',
        position: 'Backend Developer',
        duration: 'Sep 2015 – Present',
        description: 'Advising programmers in the choosing solutions.<br/>' +
            'Text and video chats, video streaming, working with big data.<br/>' +
            'Development of web applications, services, api for clients.<br/>' +
            'Setting up and deploying server applications on the Linux platform.<br/>' +
            'Delivery and analytics service for gaming tables of McDonald’s Canadian branches.<br/>' +
            'Development of a chromosome processing application for the Singapore Medical University.',
        techs: [
            'fastify', 'sequelize', 'vue', 'quasar', 'three', 'fabric.js', 'uWebSockets.js', 'WebRtc',
            'mediasoup', 'php', 'phalcon', 'yii', 'laravel', 'joomla', 'go', 'chi', 'xmpp', 'ldap',
            'mysql', 'redis', 'postgresql', 'memcache', 'swagger'
        ]
    },
    {
        workAt: 'MonsterLeads',
        link: 'https://monsterleads.pro',
        position: 'Backend Developer',
        duration: 'Dec 2014 - Sep 2015',
        description: 'OAuth for a group of partner program projects.<br/>' +
            'Creation of a cool center service for working with operators, their monitoring and management.',
        techs: ['php', 'NodeJs', 'WebSockets', 'mysql', 'ssh', 'Asterisk', 'Ami']
    },
    {
        workAt: 'Sparkle Design',
        link: 'https://sparkledesign.com',
        position: 'Full Stack Developer',
        duration: 'Mar 2014 – Dec 2014',
        description: 'Writing website functionality for Ukrainian banks and large companies.<br/>Refactoring and development of cms used by the company.',
        techs: ['php', 'js', 'jquery', 'sql', 'css', 'bootstrap', 'smarty']
    }
]

const educationInfo = [
    {
        school: 'Interregional Academy of Personnel Management',
        location: 'Kyiv, Ukraine',
        title: 'Management. Economics and business management',
        duration: '1999 – 2007',
        description: '',
    },
]

const volunteerInfo = [
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
    }
]


const examples = [
    {
        title: 'Joomla recovery password',
        link: 'https://github.com/vlasenkofedor/Joomla_admin_login'
    },
    {
        title: 'Joomla groups for registration',
        link: 'https://github.com/vlasenkofedor/usergroup'
    },
    {
        title: 'Wordpress recovery password',
        link: 'https://github.com/vlasenkofedor/wordpress_admin_login',
    },
    {
        title: 'Dynamic pagination in Bootstrap',
        link: 'https://github.com/vlasenkofedor/pagination/blob/master/pagination.js'
    },
    {
        title: 'Cabinet designer(demo)',
        link: 'https://cupboard.top/'
    },
    {
        title: 'REST API(example)',
        link: 'https://qna.habr.com/q/852971#answer_item_1752483'
    },
    {
        title: 'Tic tac toe (magic)',
        link: 'https://jsfiddle.net/vlasenkofedor/5ad26zc7/'
    },
    {
        title: 'Traffic light',
        link: 'https://jsfiddle.net/vlasenkofedor/vfeYv/'
    },
    {
        title: 'Tabs js',
        link: 'http://jsfiddle.net/vlasenkofedor/jLprM/'
    },
]

const skillInfo = [
    {
        name: 'Javascript',
        rate: 99,
    },
    {
        name: 'PHP',
        rate: 99,
    },
    {
        name: 'Go',
        rate: 70,
    }

]

const otherSkillInfo = ['Nginx', 'Git', 'WebSockets', 'WebRtc', 'WebGL', 'MVC', 'Jira', 'Confluence']

const proSkillInfo = ['Effective communication', 'Strong problem solver', 'Team player', 'Leadership']

// 0,1,2,3,4,5
const languageInfo = [
    {
        name: 'English',
        rate: 1,
        level: 'Elementary',
    },
    {
        name: 'Ukrainian',
        rate: 4,
        level: 'Native',
    },
    {
        name: 'Russian',
        rate: 5,
        level: 'Native',
    }
]


const interestInfo = [
    {
        name: 'Algorithms',
        description: "Programming with Algorithms",
    },
    {
        name: 'Robotics',
        description: "Microcomputers and controllers",
        link: "https://www.linkedin.com/embed/feed/update/urn:li:share:6922474088674304000"
    }
]

export default {
    introInfo,
    socialMediaInfo,
    experinceInfo,
    educationInfo,
    skillInfo,
    examples,
    volunteerInfo,
    languageInfo,
    contactInfo,
    interestInfo,
    summaryInfo,
    otherSkillInfo,
    proSkillInfo
}
