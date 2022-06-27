import Job from './components/Job'
import { useState, useEffect } from 'react'
import { data } from './data'

const App = () => {

  const [jobs, setJobs] = useState([])
  const [filterCatagories, setFilterCatagories] = useState([])


    const hook = () => {
      setJobs(data)
    }

  useEffect(hook, [])

  const tabValue = async (event) => {
    if (filterCatagories.includes(event.target.textContent)) {
      return 
    }
    setFilterCatagories(filterCatagories => [...filterCatagories, event.target.textContent ])
    // setFilterCatagories(filterCatagories.concat(event.target.textContent ))

    setJobs(jobs.filter((job) => 
      filterCatagories.every((catagory) => 
        Object.values(job).includes(catagory)
      )
    ))
  }


  const removeCatagory = (event) => {
    setFilterCatagories(filterCatagories.filter(item => item !== event.target.attributes.value.value))
    
  }

  return (
    <>
          <section className='header'></section>

    <div className="wrapper">
      {filterCatagories.length > 0 ? 
        <section className='filter-catagories'>
          <ul>
            {filterCatagories.map((catagory, index) =>
              <li key={index}>{catagory}
                <span value={catagory} onClick={removeCatagory}></span>
              </li>)}
          </ul>
          <button onClick={() => setFilterCatagories([])} className='clear-filters'>Clear</button>
        </section> : ''}
      <section className='job-listing'>
        {jobs.map(job => 
            <Job key={job.id} data={job} filterEvent={tabValue}/>
          )}
      </section>
      
    </div>
    </>
  );
}

export default App;
