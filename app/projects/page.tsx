import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      id: "west-3-hotel",
      title: "West 3 Hotel",
      description: "A hotel Website to showcase the hotel and its rooms with booking management and also an dmin/user dashboards.",
      image: "/images/West3.png",
      techs: ["Swiper.js", "JavaScript (Vanilla)", "Tailwind CSS", "PHP", "MySQL", "SQL", "PDO", "Composer", "PHPMailer" ],
      link: "https://west3hotel.great-site.net/?i=1",
    },
    {
      id: "B-Weh Schools Montessori",
      title: "B-Weh Schools Montessori",
      description: "A modern, professional, and secure website for B-Weh Schools Montessori.",
      image: "/images/bws.png",
      techs: ["TypeScript", "Next.js 14", "JavaScript", "Tailwind CSS", "Shell"],
      link: "https://bwehschools.com/",
    },
     {
      id: "Personal Portfolio",
      title: "My Personal Portfolio",
      description: "This is my a project on my personal Protforlio site ",
      image: "/images/port.png",
      techs: ["TypeScript", "JavaScript", "CSS"],
      link: " ",
    },
    {
      id: "FYP",
      title: "Student Final CGPA Predictor",
      description: "A predictive analytics study using 10 years of university data to examine how SHS subject performance affects students’ Final GPA. Built MLR and ANN models, with MLR achieving high accuracy (R² = 0.93). Identified Mathematics and Integrated Science as the strongest predictors of success. Findings support better SHS preparation, targeted student support, and data-driven decisions in admissions.",
      image: "/images/FYP.png",
      techs: ["Jupyter Notebook", "Python", "Streamlit.app"],
      link: "https://fypmodels.streamlit.app/",
    },
     {
      id: "Sales Dashboard",
      title: "Sales Dashboard",
      description: "This is a Sales Dashboard that visualize, Trend of Sales, Sum of Salse, Profit by segment, Sales by Category, Count of slaes etc and a Filter section that filters the entire dashboard base on the use preference   ",
      image: "/images/excel.png",
      techs: ["Excel"],
      link: " ",
    },
     {
      id: "Dashboard",
      title: "Sales Dashboard",
      description: "This is a Sales Dashboard for a Car company indicates the Total Sales by Region, the sales growth compared to previouse years by Year and Region. It also have a filtering section for users to toggle between different items for insight ",
      image: "/images/car.png",
      techs: ["PowerBi", "DAX Functions"],
      link: "https://app.powerbi.com/links/Hq9kk-Kd59?ctid=3d201cb4-7cd6-4e02-aee3-191d7a26d1ea&pbi_source=linkShare",
    },
    {
      id: "Dashboard1",
      title: "Sale Dashboard for a Shop",
      description: "This is a Sales Dashboard of an Electronics shop, it entails KPI's such as the (Total Sales, the Average quantity sold, Average sales per transaction, Sum of quantity sold), Total Sales by Customer ID, Avgerage Quantity by Products, Trend of Total sales by month, Map data on Regiondistribution",
      image: "/images/good.png",
      techs: ["PowerBi", "DAX Function"],
      link: " ",
    },
    {
      id: "Dashboard2",
      title: "Sale Trends",
      description: "Demo charts on sales Trends",
      image: "/images/salest.png",
      techs: ["PowerBi", "DAX Function"],
      link: " ",
    },
    {
      id: "Dashboard3",
      title: "Sales Dashboard for Cars ",
      description: "This dashboard projects the Sum of sales for variouse car brands, with different chart visuals and also include a filtering section where users can filter other car brands for insight ",
      image: "/images/bka.png",
      techs: ["PowerBi", "DAX Function"],
      link: " ",
    },
    // Add more projects here
  ];

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark px-4 sm:px-6 lg:px-8 py-20 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold tracking-tighter">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on across Data Analytics, Software Development, Networking, and IT Support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-20">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
