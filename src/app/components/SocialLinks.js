import { SiGithub, SiLinkedin } from "react-icons/si";

const SocialLinks = () => (
    <div className="mt-10 flex justify-center space-x-4">
      <a href="https://github.com/mroz-michael" target="_blank" rel="noopener noreferrer">
        <SiGithub className="text-gray-400 hover:text-white transition" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/michael-mroz-b687b32b3/" target="_blank" rel="noopener noreferrer">
        <SiLinkedin className="text-gray-400 hover:text-white transition" size={30} />
      </a>
    </div>
  );

  export default SocialLinks;