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

  const tabValue = (event) => {
    if (filterCatagories.includes(event.target.textContent)) {
      return 
    }
    // setFilterCatagories(filterCatagories.concat(event.target.textContent))
    setFilterCatagories(filterCatagories => [...filterCatagories, event.target.textContent ])

  }

  let filteredList = []
  filterCatagories.forEach(catagory => {
    const test = jobs.filter(job => {
      return job.languages.includes(catagory)
    })
    console.log(test);
  })


  const removeCatagory = (event) => {
    const itemToRemove = event.target.attributes.value.value
    setFilterCatagories(filterCatagories.filter(item => item !== itemToRemove))
  }
  
  return (
    <div className="wrapper">
      {filterCatagories.length > 0 ? 
        <section className='filter-catagories'>
          <ul>
            {filterCatagories.map((catagory, index) =>
              <li key={index}>{catagory}
                <span value={catagory} onClick={removeCatagory}></span>
              </li>)}
          </ul>
        </section> : ''}
      <section className='job-listing'>
        {jobs.map(job => 
            <Job key={job.id} data={job} filterEvent={tabValue}/>
          )}
      </section>
      
    </div>
  );
}

export default App;
