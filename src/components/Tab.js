const Tab = ({ props, filterEvent }) => {
  
  return (
    <p onClick={filterEvent}>
      {props}
    </p>
  )

}

export default Tab