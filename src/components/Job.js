const Job = ({ data }) => {

  return (
    <li>
      <img src={data.logo} alt=''/>
      <div className="job-info">
        <span className="company-name">{data.company}
        {data.new ? 'new' : ''}
        {data.featured ? 'featured' : ''}

        </span>

        <span className="job-position">{data.position}</span>
        <span className="job-data">{data.postedAt}&#x2022;{data.contract}&#x2022;{data.location}</span>
      </div>
      <div className="tags">
        hello

      </div>
    </li>
  )
}

export default Job