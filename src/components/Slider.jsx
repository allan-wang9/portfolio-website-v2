import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faJs,
    faPython,
    faJava,
    faReact,
    faDocker,
    faMicrosoft,
    faGit,
} from '@fortawesome/free-brands-svg-icons';
import {
    SiGraphql,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiTypescript,
} from '@icons-pack/react-simple-icons';

const Slider = () => {
    return (
        <div className="skills-container overflow-hidden whitespace-nowrap">
            <ul className="skills-list flex animate-slide space-x-4">
                <li className="skill-item flex items-center relative text-blue-300">
                    <FontAwesomeIcon icon={faJs} className="mr-2"/> JavaScript
                </li>
                <li className="skill-item flex items-center relative text-blue-300">
                    <SiTypescript size={18} className="mr-2"/> TypeScript
                </li>
                <li className="skill-item flex items-center relative text-blue-300">
                    <FontAwesomeIcon icon={faPython} className="mr-2"/> Python
                </li>
                <li className="skill-item flex items-center relative text-blue-300">
                    <FontAwesomeIcon icon={faJava} className="mr-2"/> Java
                </li>
                <li className="skill-item flex items-center relative text-blue-300">
                    <SiMysql size={18} className="mr-2"/> SQL
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <FontAwesomeIcon icon={faReact} className="mr-2"/> React
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <SiNodedotjs size={18} className="mr-2"/> Node
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <SiGraphql size={18} className="mr-2"/> GraphQL
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <SiMongodb size={18} className="mr-2"/> MongoDB
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <FontAwesomeIcon icon={faDocker} className="mr-2"/> Docker
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <SiKubernetes size={18} className="mr-2"/> Kubernetes
                </li>
                <li className="skill-item flex items-center  relative text-blue-300">
                    <FontAwesomeIcon icon={faMicrosoft} className="mr-2"/> Azure
                </li>
                <li className="skill-item flex items-center relative text-blue-300">
                    <FontAwesomeIcon icon={faGit} className="mr-2"/> Git
                </li>
            </ul>
        </div>
    );
};

export default Slider;