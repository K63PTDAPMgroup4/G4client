import { useEffect } from 'react'

import OrderApi from 'apis/orderApi'
import { toast } from 'react-toastify'


import SucceededImage from 'assets/images/image_succeeded.png'
import Button from 'components/Button'
function Congratulation() {
  return (
    <div className="mx-auto text-center my-10">
      <img
        src={SucceededImage}
        alt=""
        className=" ml-[50%] -translate-x-2/4 w-[300px] object-cover  flex justify-center "
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{title}!</h1>
        <h2 className="mb-10">{description}</h2>
        <Button to={redirect}>{titleBtn}</Button>
      </div>
    </div>
  )
}
export default Congratulation
