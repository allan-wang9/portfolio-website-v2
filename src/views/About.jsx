import Button from '../components/Button.jsx';
import Slider from '../components/Slider.jsx';

import Globe from 'react-globe.gl';

const About = () => {
    return (
        <section className="c-space my-20" id="about">
            <div className="w-full text-white-600">
                <p className="head-text pb-10">About Me</p>
                <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <div>
                                <p className="grid-headtext">Nice to Meet You!</p>
                                <p className="grid-subtext">
                                    My name is Allan Wang and I&apos;m a Software Engineer with over 2 years of
                                    professional
                                    experience specializing in full-stack development. Currently, I am working on
                                    innovative cybersecurity solutions at Trend Micro.
                                    <br/>
                                    <br/>
                                    Prior to this, I graduated from Carleton University with a Bachelors of
                                    Computer Science. Outside of my professional career, my hobbies are playing
                                    basketball, soccer (COYS), and stocks/derivatives trading.
                                    <br/>
                                    <br/>
                                    Feel free to check out my site and connect with me through my socials. I&apos;m
                                    looking
                                    forward to meeting some of you. Thanks for stopping by!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <div>
                                <p className="grid-headtext">Tech Stack</p>
                                <p className="grid-subtext">
                                    I work with a variety of programming languages, frameworks and development tools.
                                    I&apos;m always striving to learn more to keep up with the latest tech!
                                </p>
                            </div>
                            <img src="/assets/tech.png" alt="grid-2"
                                 className="w-full sm:h-[276px] h-fit object-contain"/>
                            <Slider/>
                        </div>
                    </div>
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <div>
                                <p className="grid-headtext">Locate Me</p>
                                <p className="grid-subtext">I&apos;m based in Ontario, Canada. Interact with the globe
                                    to find me!</p>
                            </div>
                            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <Globe
                                    height={350}
                                    width={350}
                                    backgroundColor="rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity={0.9}
                                    showAtmosphere
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{
                                        lat: 45,
                                        lng: -76,
                                        text: "You found me!",
                                        color: 'white',
                                        size: 150
                                    }]}
                                />
                            </div>
                            <div>
                                <Button name="Connect with me!" isBeam containerClass="w-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
