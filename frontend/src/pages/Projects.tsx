import PageTitle from "../components/PageTitle";
import { Link } from "react-router";
import * as motion from "motion/react-client"



const ProjectsPage = () => {

  const navBar = [
    {title: 'Все', link: '/'},
    {title: 'В процессе', link: '/'},
    {title: 'В ожидании', link: '/'},
    {title: 'Сделан', link: '/'},
    {title: 'Отменен', link: '/'},
  ]

  return(
    <>
    <PageTitle title="Проекты"/>

    {/* Контент под заголовком ( навигация ) */} 
    <div className="flex justify-between items-center w-full">  

      <div className="flex gap-2 bg-gray-200"> 
        {navBar.map(item => ( 
          <motion.button key={item.link} className="p-5 m-2 bg-amber-100"> 
            <Link to={item.link}> {item.title} </Link> 
          </motion.button> 
        ))} 
      </div>  

      {/* Добавление */} 
      <div className=""> 
        <motion.button> Добавить проект </motion.button> 
      </div> 
    </div>



    </>
  )
}

export default ProjectsPage;