const Button = ({name, isBeam = false, containerClass}) => {
    const linkedinUrl = "https://www.linkedin.com/in/allanwang-cu/";

    const handleClick = () => {
        window.open(linkedinUrl, '_blank', 'noopener noreferrer');
    }

    return (
        <button onClick={handleClick} className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
            )}
            {name}
        </button>
    );
};

export default Button;
