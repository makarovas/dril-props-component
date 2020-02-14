import React from 'react'
import PropTypes from 'prop-types'

export default function Grid({repos = []} = {}) {
  // let  reps = JSON.stringify(repos, null, 2)

  
  
  return (
   
   <>
      <h1>Top github accounts</h1>
    <ul className='row'>
    {repos.map((repo,i)=>{
      const { name, owner, html_url, stargazers_count, open_issues} = repo;
      const {login, avatar_url} = owner;
      return (
        <li key={html_url} 
        className='card' style={{width: "18rem"}}
        >
          <h4 className='h4 card-title'>{i+1}</h4>
          <img src={avatar_url} alt="img" className='card-img-top'/>
          <div className="card-body">
          <h2 className='h2 card-title'>
            <a href={html_url} className='btn btn-primary'>{login}</a>
          </h2>
          <div className='card-text'>
            {`stars: ${stargazers_count}`}
          </div>
          <div  className='card-text'>{`open issues: ${open_issues}` }</div>
          <div  className='card-text'>{`name: ${name}` }</div>
          </div>
        </li>
      )
    })}
    </ul>
   </>
   
  
   


   
      
    
    
  )
}

Grid.propTypes = {
  repos: PropTypes.array.isRequired
}
Grid.defaultProps = {
  repos: []
}


  // /* <pre>{JSON.stringify(repos, null, 2)}</pre> */