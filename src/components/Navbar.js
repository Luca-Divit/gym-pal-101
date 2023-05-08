import Image from 'next/image';
import gymPal from '../../public/gym-pal-101.png';
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mx-8 h-16'>
      <Image src={gymPal} alt="Gym Pal Logo" width={40} />
      <form action="#">
        <input className='w-48 indent-1 rounded-md' type="text" placeholder="What are you looking for?" />
      </form>
      <ul className='flex gap-4'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
