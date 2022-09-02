import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {

  const {data, isLoading} = trpc.useQuery(["card-search"])

  if(isLoading) return <div>Loading...</div>
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <div className='pb-10'></div>
    <div className=' flex justify-center items-center border-2 border-red-600 border-solid  p-10 overflow-auto'>
      <ul className='max-w-max max-h-96'>
      {data?.Products.filter(({Title}) => Title.length > 0).map(({Title})=><li>{Title}</li> )}
      </ul>
   
    </div>
    </div>
  )
}

export default Home
