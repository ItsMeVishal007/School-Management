import React from 'react'
import '../styles/home/Project.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
interface iProjectCard {
  ProjectName: string;
  ClientName:string;
}
const  ProjectCard:React.FC<iProjectCard> =({ProjectName,ClientName}) =>{
  return (
    <div className='body_card'>
    <div className='card_content'>
      <div className='content_left'>
        <h4>Project Name-:<span>{ProjectName}</span></h4>
        <p>Client-:<span>{ClientName}</span></p>
      </div>
      <div className='content_right'>
    <span>
      <EditIcon/>
    </span>
    <span><DeleteIcon/></span>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard
