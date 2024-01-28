const Testimonial = ({avatarPath, name, paragraph }) => {
  return (
    <>
      <img src={avatarPath} alt='' className='w-16 -mt-14' />
      <h5 className='text-lg font-bold'>{name}</h5>
      <p className='text-sm text-darkGrayishBlue'>
        {paragraph}
      </p>
    </>
  )
}
export default Testimonial
