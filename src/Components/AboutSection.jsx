import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const AboutSection = () => {
  return (
    <>
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px] px-9" id="about">
        {/* Left Column: Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl"
          >
            Welcome To
          </motion.h1>
          <motion.p
            variants={slideUpVariants}
            className="text-white text-4xl uppercase font-bold"
          >
            Full Stack Developer | React & Laravel Expert
          </motion.p>
          <motion.div
            variants={slideUpVariants}
            className="bg-yellow-500 w-[120px] h-[6px]"
          ></motion.div>

          <p className="text-gray-50 italic text-3xl mt-[50px]">
            I’m a passionate Full Stack Developer specializing in creating robust, user-friendly, and efficient web applications using React, Laravel, and modern web technologies. My journey in coding has been driven by the desire to build scalable applications and solve real-world problems through technology.
          </p>

          <p className="text-white text-lg mt-6">
            With a deep understanding of both front-end and back-end technologies, I focus on developing responsive, interactive, and efficient web applications. From building custom web interfaces with React to developing secure and scalable back-end services using Laravel, I enjoy the challenge of solving complex problems and turning ideas into functional products.
          </p>

          <motion.div
            variants={slideUpVariants}
            className="bg-yellow-500 w-[120px] h-[6px] mt-[40px]"
          ></motion.div>

          <p className="text-white text-lg mt-6">
            Over the years, I’ve built expertise in multiple technologies and frameworks, including JavaScript, PHP, Node.js, MySQL, and MongoDB, among others. My approach to development is centered around clean, efficient code, fast load times, and seamless user experiences. With a strong foundation in both technical skills and creative problem-solving, I’m always eager to work on projects that challenge me and push my limits as a developer.
          </p>

          <p className="text-white text-lg mt-6">
            I’m not just a developer; I’m a lifelong learner. Technology is ever-evolving, and I’m constantly upgrading my skills to stay ahead of the curve. Whether it’s learning a new framework or diving into a new language, I’m always excited to learn and grow as a developer.
          </p>

        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-center gap-6"
        >
          <motion.img
            src="https://via.placeholder.com/300"
            alt="Mokaddes Ali"
            className="rounded-full shadow-lg"
            variants={zoomInVariants}
            whileInView="visible"
            initial="hidden"
          />
        </motion.div>
      </div>

      {/* Additional Information */}
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] text-center" id="skills">
        <motion.h2
          variants={slideUpVariants}
          className="text-yellow-500 text-3xl font-bold mb-6"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className="grid lg:grid-cols-3 grid-cols-1 gap-6"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.h3
              variants={zoomInVariants}
              className="text-yellow-500 text-xl font-semibold mb-4"
            >
              Front-End Development
            </motion.h3>
            <p className="text-white text-lg">
              I specialize in creating dynamic, fast, and scalable user interfaces using React. With a deep understanding of JSX, hooks, state management (Redux), and responsive design principles, I build applications that not only function well but also deliver an engaging user experience. 
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.h3
              variants={zoomInVariants}
              className="text-yellow-500 text-xl font-semibold mb-4"
            >
              Back-End Development
            </motion.h3>
            <p className="text-white text-lg">
              My expertise extends to back-end development with PHP, Laravel, and Node.js. I develop secure and scalable RESTful APIs, manage databases (MySQL, MongoDB), and build efficient back-end services that power the front-end. 
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.h3
              variants={zoomInVariants}
              className="text-yellow-500 text-xl font-semibold mb-4"
            >
              Tools & Technologies
            </motion.h3>
            <ul className="text-white text-lg list-disc list-inside">
              <li>React.js, JavaScript (ES6+), HTML5, CSS3</li>
              <li>Laravel, PHP, Node.js, Express</li>
              <li>MySQL, MongoDB, Firebase</li>
              <li>Git, GitHub, Docker, Nginx</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          className="bg-yellow-500 w-[120px] h-[6px] mt-[40px] mb-[40px]"
        ></motion.div>

        <motion.p
          variants={slideUpVariants}
          className="text-white text-xl"
        >
          As a developer, I believe in delivering top-quality work that exceeds client expectations. I work closely with stakeholders to understand project goals and deliver products that meet business needs while ensuring the best possible user experience.
        </motion.p>

        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl font-semibold mt-[60px]"
        >
          Professional Journey
        </motion.h3>
        <motion.p
          variants={slideUpVariants}
          className="text-white text-lg mt-6"
        >
          Over the past few years, I’ve worked on various web development projects for businesses of all sizes. My experience includes working with clients from diverse industries such as e-commerce, education, healthcare, and entertainment. Whether it’s building a simple landing page or a complex full-stack application, I’ve consistently delivered high-quality solutions on time and within budget.
        </motion.p>

        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl font-semibold mt-[40px]"
        >
          Education
        </motion.h3>
        <motion.p
          variants={slideUpVariants}
          className="text-white text-lg mt-6"
        >
          I graduated with a Bachelor's degree in Computer Science from XYZ University. During my studies, I learned the fundamentals of programming, algorithms, data structures, and web development. This solid academic foundation laid the groundwork for my career as a full-stack developer. I continue to pursue self-directed learning through online courses, tutorials, and community events to stay up-to-date with the latest trends and technologies.
        </motion.p>

        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl font-semibold mt-[40px]"
        >
          Project Experience
        </motion.h3>
        <motion.p
          variants={slideUpVariants}
          className="text-white text-lg mt-6"
        >
          Throughout my career, I’ve had the privilege of working on a variety of exciting projects, including:
          <ul className="text-white text-lg list-disc list-inside mt-4">
            <li>
              E-Commerce Platforms: Developed full-featured e-commerce websites with features such as payment gateway integration, product catalogs, user authentication, and order management.
            </li>
            <li>
              Social Media Platforms: Created social networking sites with chat features, real-time notifications, and complex database management.
            </li>
            <li>
              CMS Development: Built content management systems that allowed users to manage website content, create blogs, and run marketing campaigns.
            </li>
          </ul>
        </motion.p>

        <motion.div
          variants={slideUpVariants}
          className="bg-yellow-500 w-[120px] h-[6px] mt-[40px] mb-[40px]"
        ></motion.div>

        <motion.p
          variants={slideUpVariants}
          className="text-white text-xl"
        >
          If you are looking for a dedicated and experienced full-stack developer who can deliver exceptional results, feel free to reach out. I’d be happy to discuss how we can collaborate and create something amazing together.
        </motion.p>

        <motion.button
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="bg-yellow-500 rounded-lg hover:bg-white hover:text-black px-10 py-3 font-bold text-black mt-6"
        >
          Get in Touch
        </motion.button>
      </div>
    </>
  );
};

export default AboutSection;

