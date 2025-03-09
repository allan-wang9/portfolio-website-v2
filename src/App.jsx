import Header from './views/Header.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import WorkExperience from './views/Experience.jsx';
import EnterpriseProjects from './views/EnterpriseProjects.jsx';
import PersonalProjects from './views/PersonalProjects.jsx';
import Epilogue from './views/Epilogue.jsx';
import Footer from './views/Footer.jsx';

const App = () => {
    return (
        <main className="w-11/12 mx-auto relative">
            <Header/>
            <Home/>
            <About/>
            <WorkExperience/>
            <EnterpriseProjects/>
            <PersonalProjects/>
            <Epilogue/>
            <Footer/>
        </main>
    );
};

export default App;
