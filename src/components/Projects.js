import React from 'react'

const Projects = () => {
    return (
    <section class="min-h-screen flex flex-col items-center justify-center bg-gray-100" id='projects'>
        
        <h1 class="text-5xl font-bold mt-7">Projects</h1>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-col-1 px-8 py-24 gap-8">

            <div >
                <div>
                    <div class="bg-white p-6 rounded-lg">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                        <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
            </div>
            
            <div>
                <div class="bg-white p-6 rounded-lg">
                    <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg" alt="Image Size 720x400" />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>

            <div>
                <div class="bg-white p-6 rounded-lg">
                    <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574" alt="Image Size 720x400"/>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>

            <div>
                <div class="bg-white p-6 rounded-lg">
                    <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg" alt="Image Size 720x400"/>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>

        </div>
        
    </section>
    );
}

export default Projects
