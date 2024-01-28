const Testimonial = ({avatarPath, name, paragraph }) => {
  return (
    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
      <img src={avatarPath} alt='' className='w-16 -mt-14' />
      <h5 className='text-lg font-bold'>{name}</h5>
      <p className='text-sm text-darkGrayishBlue'>
        {paragraph}
      </p>
      </div>
  )
}
export default Testimonial
