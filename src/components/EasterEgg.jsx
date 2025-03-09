import {useGLTF} from '@react-three/drei';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const EasterEgg = (props) => {
    const targetRef = useRef();
    const {scene} = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf',
    );

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={0.2}>
            <primitive object={scene}/>
        </mesh>
    );
};

export default EasterEgg;
