import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Header } from '../Components'


const HomeLayout = () => {
  return (
      <>
        <Header/>
        <section className='align-element py-20'>
          <Outlet/>
        </section>
               
      </>
  )
}

export default HomeLayout
