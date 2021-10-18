const dummy = {
        nav: {
            logo: 'KJK',
            links: [
                { text: 'Work', to: 'mywork' },
                { text: 'Contact', to: 'mycontact' },
            ],
        },
        header: {
            image:
                'https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
            text: ['Hi!', "It's me Random.", 'I am '],
            typical: [
                'web developer. 🖥',
                2000,
                'Youtuber. 📹',
                2000,
                'Mobile Developer',
                2000,
            ],
            btnText: 'Discover More',
        },
    
        stack: {
            title: 'Stack',
            tech: [
                {
                img: process.env.PUBLIC_URL + '/assets/mongo.png',
                alt: 'mongodb',
                },
                {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
                },
                {
                img: process.env.PUBLIC_URL + '/assets/express.png',
                alt: 'express',
                },
                {
                img: process.env.PUBLIC_URL + '/assets/node.png',
                alt: 'node',
                },
            ],
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        },
};

export default dummy