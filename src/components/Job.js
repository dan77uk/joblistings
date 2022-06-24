const Job = ({ data }) => {

  return (
    <li>
      <img src={data.logo} alt=''/>
    <div>
      {data.company}
      {data.positon}
      {data.postedAt}
      {data.contract}
      {data.location}
    </div>


    </li>
  )
}

export default Job