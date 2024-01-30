import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

function MovieItem({ movie }) {
  const navigate = useNavigate()
  return (
    <div className="bg-white flex flex-col rounded-lg  h-full select-none relative">
      <img
        src={movie.poster}
        alt=""
        className=" w-full h-[500px] rounded-xl object-cover "
      />
      <div>
        <span className='absolute top-0 bg-secondary text-primary py-1 px-3 rounded-md ml-3 mt-3'>18+</span>
      </div>
      <div className="py-4 flex flex-col  w-full absolute bottom-0 text-white text-center ">
        <h3 className='text-center text-2xl'>{movie.name}</h3>
        <div className="flex items-center justify-between my-2 mx-8">
          <Button primary className="hover:opacity-100">Buy now</Button>
          <Button onClick={() => navigate(`/movie/detail/${movie.slug}`)} primary className="hover:opacity-100">Detail</Button>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
