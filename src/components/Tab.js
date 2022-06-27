const Tab = ({ props, filterEvent }) => {
  
  return (
    <button onClick={filterEvent}>
      {props}
    </button>
  )

}

export default Tab