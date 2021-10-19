import React from 'react'
import '../../styles/home/Project.scss'
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from '../../components/ProjectCard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Project() {
  return (
    <div className='project_container'>
     <div className='Box_Search'>
     <input className = "search-text" type="text" placeholder = "Search Anything" onChange={(e)=>console.log(e.target.value)}/>
    <a href="#" className = "search-btn"> 
      <SearchIcon/>
    </a>
     </div>
     <div className='project_body'>
<div className='cards'>
<ProjectCard ClientName='ABC' ProjectName='WER'/>
<ProjectCard ClientName='Xyz' ProjectName='Dsr'/>
<ProjectCard ClientName='ABhhhC' ProjectName='kljkjkj'/>
</div>
<div className='add_project'>
<span><AddCircleOutlineIcon style={{fontSize:'60px',color:'gray'}}/></span>
</div>



     </div>
    </div>
  )
}

export default Project
