import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-[hsl(204,43%,93%)]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-[700px] shadow-xl rounded-md overflow-hidden'>
        <div className='col-span-1 sm:col-span-2 p-10 bg-white'>
          <h1 className='text-[hsl(179,62%,43%)] font-semibold text-xl tracking-wide mb-3'>Join our community</h1>
          <span className='text-[hsl(71,73%,54%)] text-md font-semibold mb-2 block'>30-day, hassle-free money back guarantee</span>
          <p className='text-[hsl(218,22%,67%)] text-sm '>Gain access to our full library of tutorials along with expert code reviews. 
          Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='bg-[hsl(179,62%,43%)] p-10 text-white'>
          <span className='font-semibold block mb-3'>Monthly Subscription</span>
          <div className='flex items-start gap-1 mb-1'>
            <span className='font-bold text-3xl'>$29</span>
            <span className='block my-2 font-light relative bottom-1'>per month</span>
          </div>
          <span className='font-light'>Full access for less than $1 a day</span>
          <button className='block bg-[hsl(71,73%,54%)] w-full py-2 rounded-md mt-8 shadow-md cursor-pointer'>Sign Up</button>
        </div>
        <div className='bg-[hsl(179,62%,43%)] opacity-70 p-10 text-white'>
          <span className='mb-3 block'>Why Us</span>
          <ul className='font-light text-sm'>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
