const dummy = {
        nav: {
            logo: 'KJK',
            links: [
                { text: 'Home', to: 'home' },
                { text: 'Stack', to: 'stack' },
                { text: 'Work', to: 'mywork' },
                { text: 'Contact', to: 'mycontact' },
            ],
        },
        header: {
            image:
            'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
            text: ['안녕하세요!', "저는 김진경입니다.", '저의 관심사는 '],
            typical: [
                ' frontend developer. 🖥',
                2000,
                ' Mobile Developer. 📱',
                2000,
                ' Blogger. 👨‍💻 ',
                2000,
            ],
            btnText: '저를 소개합니다'
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