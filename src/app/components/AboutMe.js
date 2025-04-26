import SocialLinks from "./SocialLinks";

const AboutMe = () => {
    const highlightText = "text-green-400 font-semibold";
  return (
    <section className="max-w-2xl text-center">
      <h1 className="text-3xl font-bold white">Here's a bit more about me!</h1>
      <p className="mt-3 text-white">
        I'm a 2nd-year Computer Science student at Dalhousie always trying to hone my problem solving skills.
        I love working with <span className={highlightText}>Java, Python, and Full-Stack Web Development</span>.
        Right now I'm learning <span className={highlightText}>Next.js and Tailwind CSS</span> (I used both for this website!).
        I also just started learning about Cloud through a workshop, <span className={highlightText}>I'm planning to take the AWS Cloud Practitioner exam this Summer!</span>
      </p>
      <p className="mt-3 text-white">
        I'm also currently working for Dalhousie as a <span className={highlightText}>Teaching Assistant</span> for Intro to Web Development,
        and a <span className={highlightText}>Marker</span> for Discrete Math.
      </p>
      <p className="mt-3 text-white">
        I'm <span className={highlightText}>thrilled to be joining SimplyCast</span> as a co-op developer this Summer. I can't wait to get hands on experience in a professional environment.
      </p>
      <p>Looking to the future, my biggest goal is to dive into <span className={highlightText}> Machine Learning and AI.</span></p>
      <footer>
        <h3 className="text-2xl white mt-10">
            Thanks for taking some time to check out my website :) Below are links to my GitHub and LinkedIn profiles
        </h3>
        <SocialLinks />
      </footer>

    </section>
  );
};

export default AboutMe;
