import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Learnify: An Online Learning Platform",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1692032065/Personal%20Portfolio/learnify-1_gybje8.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1692032065/Personal%20Portfolio/learnify-2_oneneu.png",
    description:
      "Experience a transformative online learning journey with Learnify, The cutting-edge Next.js app! Explore a diverse range of courses, engage with interactive lessons, and embrace a seamless user experience. With Learnify, acquiring new skills and knowledge has never been easier. Join us today and unlock the full potential of your learning endeavors.",
    tools: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Stripe",
      "Prisma",
      "GCP",
      "Tailwind CSS",
      "AOS",
    ],
    liveLink: "https://learnify-pro.vercel.app",
    fullStackLink: "https://github.com/masudranashawon/learnify",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Proxima: Project Management Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-one_rzufpn.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-two_zrwmos.png",
    description:
      "Proxima is a project management application built using the MERN stack. The application allows users to create, update, and delete their own projects with ease. Proxima is designed with high-level security in mind, featuring strong JWT authentication and front-end route protection to ensure the safety and privacy of user data.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://proxima-application.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/proxima-client",
    backEndLink: "https://github.com/masudranashawon/proxima-server",
  },
  {
    id: 3,
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615229/Personal%20Portfolio/tech-alpha-1_lgzxvt.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615227/Personal%20Portfolio/tech-alpha-2_tlagyh.png",
    description:
      "Tech Alpha is an online electronic accessories store that offers the latest and greatest electronic accessories. Our website features a clean, modern design, an easy-to-use interface and a robust shopping functionality built using Redux.js. All the product data has been served via JSON server and fetched using Axios.",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],
    liveLink: "https://tech-alpha-masud.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/tech-alpha",
    backEndLink: "https://github.com/masudranashawon/tech-alpha-server",
  },
  {
    id: 4,
    title: "Foodverse: A Recipe Finder Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodverse-1_mkf88w.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodvarse-2_qekgne.png",
    description:
      "Foodverse is a recipe web application, where a user can search for a variety of recipes and find the ingredients and quantities needed to make each recipe item. Also, favorite recipe items can be saved in the browser's local storage. It is easy to find different recipes for vegetarians and meat eaters, as well as those who want to lose weight.",
    tools: ["React.js", "React Router", "Tailwind CSS"],
    liveLink: "https://food-verse-masud.netlify.app/",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/foodverse",
    backEndLink: "",
  },
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
