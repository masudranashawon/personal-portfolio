import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615229/Personal%20Portfolio/tech-alpha-1_lgzxvt.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615227/Personal%20Portfolio/tech-alpha-2_tlagyh.png",
    description:
      "Tech Alpha is an online electronic accessories store that offers the latest and greatest electronic accessories. Our website features a clean, modern design, an easy-to-use interface and a robust shopping functionality built using Redux.js. All the product data has been served via JSON server and fetched using Axios.",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],
    liveLink: "https://tech-alpha-masud.netlify.app",
    frontEndLink: "https://github.com/masudranashawon/tech-alpha",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Foodverse: A Recipe Finder Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodverse-1_mkf88w.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodvarse-2_qekgne.png",
    description:
      "Foodverse is a recipe web application, where a user can search for a variety of recipes and find the ingredients and quantities needed to make each recipe item. Also, favorite recipe items can be saved in the browser's local storage. It is easy to find different recipes for vegetarians and meat eaters, as well as those who want to lose weight.",
    tools: ["React.js", "React Router", "Tailwind CSS"],
    liveLink: "https://food-verse-masud.netlify.app/",
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
