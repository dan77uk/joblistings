import Job from './components/Job'
import { useState, useEffect } from 'react'
import { data } from './data'

const App = () => {

  const [jobs, setJobs] = useState([])
  const [filterCategories, setFilterCategories] = useState([])

  const hook = () => {
    setJobs(data)
  }

  useEffect(hook, [jobs, filterCategories])

  const tabValue = (event) => {
    if (filterCategories.includes(event.target.textContent)) { return }
    setFilterCategories(filterCategories.concat(event.target.textContent ))  
  }

  const res = jobs.filter((job) => 
    filterCategories.every((catagory) => 
      Object.values(job).includes(catagory) || Object.values(job.tools).includes(catagory) || Object.values(job.languages).includes(catagory)
    )
  )

  const removeCatagory = (event) => {
    setFilterCategories(filterCategories.filter(item => item !== event.target.attributes.value.value))
  }

  const resetFilters = () => {
    setJobs(jobs)
    setFilterCategories([])
  }

  return (
    <>
    <section className='header'></section>
    <div className="wrapper">
      {filterCategories.length > 0 ? 
      <section className='filter-catagories'>
        <ul>
          {filterCategories.map((catagory, index) =>
            <li key={index}>{catagory}
              <span value={catagory} onClick={removeCatagory}></span>
            </li>)}
        </ul>
        <button onClick={resetFilters} className='clear-filters'>Clear</button>
      </section> : ''}
      <section className='job-listing'>
      {res.map(job => 
          <Job key={job.id} data={job} filterEvent={tabValue}/>
        )}
      </section>
    </div>
    </>
  );
}

export default App;
