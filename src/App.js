import Job from './components/Job'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [jobs, setJobs] = useState([])
  const [filterCatagories, setFilterCatagories] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/jobs')
      .then(response => {
        setJobs(response.data)
      })
  }, [])

  const tabValue = (e) => {
    setFilterCatagories(e.target.textContent)
  }
  
  console.log(filterCatagories)

  return (
    <div className="wrapper">
      <section className='job-listing'>
        {jobs.map(job => 
            <Job key={job.id} data={job} filterEvent={tabValue}/>
          )}
      </section>
    </div>
  );
}

export default App;
