import {workExperience} from '../constants/index.js';

const WorkExperience = () => {
    return (
        <section className="c-space my-20" id="experience">
            <div className="w-full text-white-600">
                <p className="head-text">Work Experience</p>
                <div className="work-container">
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperience.map((item, index) => (
                                <div
                                    key={index}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full p-3 rounded-lg bg-slate-300" src={item.icon}
                                                 alt="company-logos"/>
                                        </div>

                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="px-2.5 pt-2 pb-5">
                                        <p className="font-bold text-white-800">{item.company}</p>
                                        <p className="text-sm mb-5">
                                            {item.role} | <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
