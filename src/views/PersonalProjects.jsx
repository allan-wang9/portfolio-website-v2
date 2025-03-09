import {personalProjects} from '../constants/index.js';

const PersonalProjects = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Personal Projects</h3>
            <div className="personal-project-container">
                {personalProjects.map((item) => (
                    <div key={`review-${item.id}`} className="personal-project">
                        <div className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-white-700 mb-1">{item.name}</p>
                                <p className="text-white-500 md:text-base text-sm font-light mb-3">{item.subname}</p>
                                <p className="text-white-800 font-light mb-3">{item.desc}</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-5">
                                <a
                                    className="flex items-center gap-2 cursor-pointer text-white-600"
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer">
                                    <p>View on GitHub</p>
                                    <img src="/assets/github.svg" alt="arrow" className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalProjects;
