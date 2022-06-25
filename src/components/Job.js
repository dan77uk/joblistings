import Tab from './Tab'

const Job = ({ data, filterEvent }) => {
  return (
    <article>
      <img src={data.logo} alt={data.company} />
      <div className="job-info">
        <h3 className="company-name">{data.company}
        {data.new ? <span className='tab blue'>NEW!</span> : ''}
        {data.featured ? <span className='tab black'>FEATURED</span> : ''}
        </h3>
        <h2 className="job-position">{data.position}</h2>
        <p className="job-data">{data.postedAt}&#x2022;{data.contract}&#x2022;{data.location}</p>
      </div>
      <div className='catagory-container'>
        <Tab props={data.role} filterEvent={filterEvent} />
        <Tab props={data.level} filterEvent={filterEvent} />
        {data.languages.map((language, index) => 
          <Tab key={index} props={language} filterEvent={filterEvent}/>
        )}
        {data.tools.map((tool, index) => 
          <Tab key={index} props={tool} filterEvent={filterEvent} />
        )}
      </div>
    </article>
  )
}

export default Job