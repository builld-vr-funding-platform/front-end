import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';

const ProjectView = () => {
    let { id } = useParams();
    
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetchProject(id);
    }, [id]);

    const fetchProject = id => {
        axiosWithAuth()
            .get(`crud/read/${id}`)
            .then(res => {
                // console.dir(res);
                setProject(res.data);
            })
            .catch(err => console.log(err));
    };

  return (
      <div className='projectView'>
          <div className='titleHead'>
            {!project && (
                <LinearProgress />
            )}
            {project && (
                <div>{project.id}</div>
            )}
          </div>
      </div>
      
    //   <div className={'projectView'}>
    //       <div className={'titleHead'}>
    //           <h1>{project.name}</h1>
    //           <h3>{project.location}</h3>
    //           <img src={project.image}/>
    //           <h2>{project.funding_goal}</h2>
    //           <h3>Funding received: {project.amount}</h3>
    //           <p>{project.description}</p>
    //           <h3>{project.email}</h3>
    //           <div className={'buttons'}>
    //               <button>Invest</button>
    //               <button>Make an Offer</button>
    //           </div>
    //       </div>
    //       <div className={'campaign'}>
    //           {project.campaignText}
    //           <div className={'buttons'}>
    //               <button>Invest</button>
    //               <button>Make an Offer</button>
    //           </div>
    //       </div>
    //   </div>
  )
};

export default ProjectView;


// if (!this.state.movie) {
//     return <div>Loading movie information...</div>;
//   }

//   return (
//     <div className="save-wrapper">
//       <MovieCard movie={this.state.movie} />
//       <button onClick={this.handleEdit}>Edit</button>
//       <button onClick={this.handleDelete}>Delete</button>
//       <div className="save-button" onClick={this.saveMovie}>
//         Save
//       </div>
//     </div>
//   );
// }