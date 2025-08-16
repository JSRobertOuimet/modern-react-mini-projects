import { Link } from "react-router";

const Hero = ({
    name = "John",
    text = "I build friendly web experiences and help others become confident modern developers!",
}) => {
    return (
        <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-4">
                Hey, I'm {name}!
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto mb-6">
                {text}
            </p>
            <div className="flex justify-center gap-4">
                <Link
                    to="/projects"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Explore Projects
                </Link>
                <Link
                    to="/contact"
                    className="border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                    Contact Me
                </Link>
            </div>
        </header>
    );
};

export default Hero;
