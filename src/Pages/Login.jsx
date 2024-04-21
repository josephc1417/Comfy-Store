import { Input, Submitbutton } from '../Components'
import { Form , Link} from 'react-router-dom'



const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
          method='POST'
          className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col'
        >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <Input className
          type='email'
          label='email' 
          name='identifier'
          defaultValue='test@test.com'
        />
        <Input
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <Submitbutton text='Login' />
        </div>
          <button type='button' className='btn btn-secondary btn-block mt-4'>
            Guest User
          </button>
          <p className='text-center mt-4'>
            Not a member yet?
            <Link to='/register' className='ml-2 link link-hover  link-primary capitalize'
            >
              Register
            </Link>
          </p>
        </Form>
    </section>
  )
}

export default Login
