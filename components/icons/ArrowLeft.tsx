const ArrowLeft = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="white"
      { ...props }
    >
      <path d="M19 12H5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 19L5 12L12 5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowLeft