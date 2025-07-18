import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full'/>
        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4x1 font-semibold text-transparent md:text-5x1 lg:text-6xl'>YOGESHWARAN T A</h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-x1 font-semibold text-transparent md:text-2x1 lg:text-3xl'>Web Developer</h3>
          <p className='max-w-[500px] text-sm text-gray-500'>A web developer is a professional who builds and maintains websites or web applications. They are responsible for the functionality, performance, and sometimes the design of a website. </p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/Yogeshwaran-18" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
          <a href="https://linkedin.com/in/yogeshwaran--ta" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
          <a href="https://instagram.com/yogesh_official18" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagram className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
          <a href="https://x.com/YogeshO86632883?t=sd1g2JilGhAlQV0JQYjnyw&s=09" target="_blank" rel="noopener noreferrer">
            <BiLogoTwitter className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
        </div>

        {/* ✅ Resume Download Button */}
        <a
          href="/YOGESHWARAN T A.pdf"
          download
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-2 text-white text-sm font-semibold transition-all duration-200 hover:bg-white hover:text-teal-600 border-2 border-transparent hover:border-teal-600"
        >
          <FiDownload className="h-5 w-5" />
          Download Resume
        </a>

      </div>
    </div>
  );
};

export default Home;
