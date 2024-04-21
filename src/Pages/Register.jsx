import {Input, Submitbutton} from '../Components'
import {Form, Link} from 'react-router-dom'

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method= 'POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        >
          <h4 className='text-center text-3xl font-bold'>Register</h4>
          <Input type='text' label='username' name='username' />
          <Input type='email' label='email' name='email' />
          <Input type='password' label='password' name='password' />
          <div className='mt-4'>
            <Submitbutton text='Register' />
          </div>
          <p className='text-center mt-4'>
            Already a member?
            <Link to='/login' className='ml-2 link link-hover  link-primary capitalize'
            >
              Login
            </Link>
          </p>
        </Form>
    </section>
  )
}
 export default Register
