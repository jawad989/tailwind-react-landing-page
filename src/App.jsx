import "./App.css"
import ListItem from "./components/ListItem"
import NavLink from "./components/NavLink"

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
            <NavLink linkLabel="Pricing"/>
            <NavLink linkLabel="Product"/>
            <NavLink linkLabel="About Us"/>
            <NavLink linkLabel="Careers"/>
            <NavLink linkLabel="Community"/>
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
    </>
  )
}

export default App
