import Job from './components/Job'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/jobs')
      .then(response => {
        setJobs(response.data)
      })
  }, [])

  return (
    <div className="wrapper">
      <ul className='job-listing'>
        {jobs.map(job => 
            <Job key={job.id} data={job}/>
          )}
      </ul>
    </div>
  );
}

export default App;
