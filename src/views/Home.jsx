import {Leva} from 'leva';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {useMediaQuery} from 'react-responsive';
import {PerspectiveCamera} from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

import {SpaceBoy} from '../components/SpaceBoy.jsx';

const Home = () => {
    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi. I&apos;m Allan <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-blue-300">Welcome</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <Leva hidden/>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                            <SpaceBoy scale={1.5} position={[0, -5.5, 0]} rotation={[0.1, 6.1, 0]}/>
                        </HeroCamera>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Home;
