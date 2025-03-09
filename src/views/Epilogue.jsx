import {Leva} from 'leva';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {useMediaQuery} from 'react-responsive';
import {PerspectiveCamera} from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

import {SpaceGirl} from '../components/SpaceGirl.jsx';

const Home = () => {
    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="epilogue">
            <div className="absolute top-80 left-60 z-10">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Thanks for visiting<span className="waving-hand">✌️</span>
                </p>
                <div className="flex gap-3 justify-center pt-3">
                    <a href="https://www.linkedin.com/in/allanwang-cu/" target="_blank" rel="noopener noreferrer">
                        <button className="social-icon">
                            <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
                        </button>
                    </a>
                    <a href="https://github.com/allan-wang9" target="_blank" rel="noopener noreferrer">
                        <button className="social-icon">
                            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <button className="social-icon">
                            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <Leva hidden/>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                            <SpaceGirl scale={2.7} position={[4, -4, 0]} rotation={[0.1, 5.8, 0]}/>
                        </HeroCamera>
                        <ambientLight intensity={5}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Home;