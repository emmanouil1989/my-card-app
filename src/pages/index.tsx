import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {

  const {data, isLoading} = trpc.useQuery(["hello",])

  if(isLoading) return <div>Loading...</div>
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <div className=' flex justify-center items-center border-2 border-red-600 border-solid h-10 max-w-md p-10'>
      {JSON.stringify(data, null, 2)}
    </div>
    </div>
  )
}

export default Home
