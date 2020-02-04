import React from 'react';

const ProjectView = project => {
  return (
      <div className={'projectView'}>
          <div className={'titleHead'}>
              <h1>{project.name}</h1>
              <h3>{project.author}</h3>
              <img/>
              <p>{project.summary}</p>
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