import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// project imports
import Button from 'components/Button'
import Input from 'components/Input'
import Logo from 'components/icons/Logo'

// third-party
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { register } from 'stores/auth/slice'

const schema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 8 characters '),
  birthday: Yup.string().required('Birthday is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.auth)
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      birthday: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data) => {
    dispatch(register({ data, navigate }))
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h1 className="text-xl font-semibold mt-5">Sign up to your account</h1>
        <div className="flex items-center justify-center text-sm mt-3">
          <div className="mr-2">Or</div>
          <div className="text-primary">start your 14-day free trial</div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px] bg-white p-10 rounded-lg shadow-md mt-10"
        >
          <Input label="Tên" placeholder="Enter your name" name="name" control={control} errors={errors} />
          <Input label="Ngày sinh" type="date" placeholder="Enter your birthday" name="birthday" control={control} errors={errors} />
          <Input label="Email" placeholder="Enter your email" name="email" control={control} errors={errors} />
          <Input label="Password" type="password" placeholder="Enter your password" name="password" control={control} errors={errors} />

          <div className="my-3 float-right">
            <p href="#" className=" text-sm">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
          <Button primary wFull loading={loading}>
            Sign up
          </Button>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="border-t border-gray-200 w-full h-1"></div>
            <div className="flex-none mx-4 text-gray-500 text-sm font-light">Or continue with</div>
            <div className="border-t border-gray-200 w-full h-1"></div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <a className="flex gap-x-2 items-center p-3 shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src="/src/assets/images/ggLogo.png" alt="" className="w-4" />
              </div>{' '}
              <span className="text-xs">Continue with Google</span>
            </a>
            <a className="flex gap-x-2 items-center p-3 shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src="/src/assets/images/fbLogo.png" alt="" className="w-4" />
              </div>{' '}
              <span className="text-xs">Continue with Facebook</span>
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
