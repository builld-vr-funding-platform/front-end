import React from 'react';

const ProjectView = project => {
  return (
      <div className={'projectView'}>
          <div className={'titleHead'}>
              <h1>{project.name}</h1>
              <h3>{project.location}</h3>
              <img src={project.image}/>
              <h2>{project.funding_goal}</h2>
              <h3>Funding received: {project.amount}</h3>
              <p>{project.description}</p>
              <h3>{project.email}</h3>
              <div className={'buttons'}>
                  <button>Invest</button>
                  <button>Make an Offer</button>
              </div>
          </div>
          <div className={'campaign'}>
              {project.campaignText}
              <div className={'buttons'}>
                  <button>Invest</button>
                  <button>Make an Offer</button>
              </div>
          </div>
      </div>
  )
};

export default ProjectView;