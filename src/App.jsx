import "./App.css"
import FooterLink from "./components/FooterLink"
import ListItem from "./components/ListItem"
import NavLink from "./components/NavLink"
import SocialLink from "./components/SocialLink"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className='relative container mx-auto p-6'>
        {/* Flex Container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='pt-2'>
            <img src='img/logo.svg' alt='' />
          </div>

          <div className='hidden md:flex space-x-6'>
            <NavLink linkLabel='Pricing' />
            <NavLink linkLabel='Product' />
            <NavLink linkLabel='About Us' />
            <NavLink linkLabel='Careers' />
            <NavLink linkLabel='Community' />
          </div>

          <a
            href='#'
            className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero'>
        {/* Flex container */}
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          {/* Left item */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Bring Everyone together to build better products.
            </h1>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger teams goals in view.
            </p>
            <div className='flex justify-center md:justify-start'>
              <a
                href='#'
                className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className='md:w-1/2'>
            <img src='img/illustration-intro.svg' alt='' />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features'>
        {/* Flex Container */}
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          {/* What's different */}
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What's different about Manage?
            </h2>
            <p className='mx-w-sm text-center text-darkGrayishBlue md:text-left'>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* Numbered List */}
          <div className='flex flex-col space-y-8 md:w-1/2'>
            {/* List Item 1 */}
            <ListItem
              paragraph='See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.'
              heading='Track Company-wide progress'
              listNumber='01'
            />

            {/* List Item 2 */}
            <ListItem
              paragraph='Set internal delivery estimates and track progress toward
              company goals. Our customisable dashboard helps you build out
              the reports you need to keep key stakeholders informed.'
              heading='Advanced built-in reports'
              listNumber='02'
            />

            {/* List Item 3 */}
            <ListItem
              paragraph='Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.'
              heading='Everything you need in one place'
              listNumber='03'
            />
          </div>
        </div>
      </section>

      <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center'>
            What's Different About Manage?
          </h2>

          {/* Testimonials Containers */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <Testimonial
                name='Anisha Li'
                avatarPath='img/avatar-anisha.png'
                paragraph='“Manage has supercharged our team’s workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”'
              />
            </div>

            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <Testimonial
                name='Ali Bravo'
                avatarPath='img/avatar-ali.png'
                paragraph='“We have been able to cancel so many other subscriptions since
                            using Manage. There is no more cross-channel confusion and
                            everyone is much more focused.”'
              />
            </div>

            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <Testimonial
                name='Richard Watts'
                avatarPath='img/avatar-richard.png'
                paragraph='“Manage has supercharged our team’s workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”'
              />
            </div>
          </div>

          {/* Button */}
          <div className='my-16'>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className='bg-brightRed'>
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
            Simplify how your team works today
          </h2>
          <div>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-300'
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-veryDarkBlue'>
        {/* Flex Container */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
          {/* Logo and socials */}
          <div className='flex flex-col-reverse items-center justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='mx-auto my-6 text-center md:hidden text-white'>
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* Logo */}
            <div>
              <img src='img/logo-white.svg' className='h-8' alt='' />
            </div>
            {/* Social Links */}
            <div className='flex justify-center space-x-4'>
              <a href='#'>
                <SocialLink profileAvatar='img/icon-facebook.svg' />
              </a>
              <a href='#'>
                <SocialLink profileAvatar='img/icon-youtube.svg' />
              </a>
              <a href='#'>
                <SocialLink profileAvatar='img/icon-twitter.svg' />
              </a>
              <a href='#'>
                <SocialLink profileAvatar='img/icon-pinterest.svg' />
              </a>
              <a href='#'>
                <SocialLink profileAvatar='img/icon-instagram.svg' />
              </a>
            </div>
          </div>
          {/* List Container */}
          <div className='flex justify-around space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <FooterLink linkLabel="Home" />
              <FooterLink linkLabel="Pricing" />
              <FooterLink linkLabel="Products" />
              <FooterLink linkLabel="About Us" />
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <FooterLink linkLabel="Carrers" />
              <FooterLink linkLabel="Community" />
              <FooterLink linkLabel="Privacy Policy" />
            </div>
          </div>

          {/* Input Container */}
          <div className='flex flex-col justify-between'>
            <form>
              <div className='flex space-x-3'>
                <input
                  type='text'
                  className='flex-1 px-4 rounded-full focus:outline-none'
                  placeholder='updates in your inbox'
                />
                <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                  Go
                </button>
              </div>
            </form>

            <div className='hidden text-white md:block'>
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
