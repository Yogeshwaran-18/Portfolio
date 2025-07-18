const Project = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* Online Food Ordering Website */}
        <a
          href="https://github.com/Yogeshwaran-18/Online-Food-Website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
        >
          <h1 className='text-3xl font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Online Food Website</h3>
          <p className='text-sm text-gray-600'>
            Developed a fully responsive food ordering web app with React.js, improving user experience and engagement. Implemented user authentication and cart functionality using Redux/Context API.
          </p>
        </a>

        {/* Plant Disease Prediction */}
        <a
          href="https://github.com/Yogeshwaran-18/Plant-Disease-Prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
        >
          <h1 className='text-3xl font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Plant Disease Prediction</h3>
          <p className='text-sm text-gray-600'>
            Created a CNN model using TensorFlow and Keras, achieving 97.8% training and 94.6% validation accuracy. Improved model robustness and reduced prediction errors significantly.
          </p>
        </a>

        {/* Weather App */}
        <a
          href="https://github.com/Yogeshwaran-18/Weather-App"
          target="_blank"
          rel="noopener noreferrer"
          className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
        >
          <h1 className='text-3xl font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Weather App</h3>
          <p className='text-sm text-gray-600'>
            Built a mobile-responsive weather forecasting web app using React.js and OpenWeatherMap API. Integrated live weather data with hourly and weekly forecasts, animated UI with Framer Motion, and user location detection using geolocation. Implemented dark mode and temperature unit toggle, enhancing usability and performance across devices.
          </p>
        </a>

      </div>
    </div>
  );
};

export default Project;
