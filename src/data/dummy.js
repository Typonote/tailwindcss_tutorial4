import android from '../assets/android_studio512.png'
import react_logo from '../assets/logo512.png'
import tailwind from '../assets/tailwind512.png'
import scss from '../assets/scss512.png'

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
                img: react_logo,
                alt: 'react',
                },
                {
                img: tailwind,
                alt: 'tailwind',
                },
                {
                img: scss,
                alt: 'scss',
                },
                {
                    img: android,
                    alt: 'android studio',
                    },
            ],
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        },
};

export default dummy