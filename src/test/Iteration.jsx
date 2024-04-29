import { useContext, useEffect, useMemo, useState } from 'react'
import EMContext from './PEContext'
import { selections } from '../const'

const Iteration = ({
  // eslint-disable-next-line react/prop-types
  index,
}) => {
  const [iteration, setIteration] = useState({})
  const { adding, iterations, setIterations } = useContext(EMContext)
  const roundedTClass = useMemo(() => index === 0 ? 'rounded-t-lg' : '', [index])
  const roundedBClass = useMemo(() => !adding && index === (iterations.length - 1) ? 'rounded-b-lg' : '', [index, adding, iterations])

  useEffect(() => {
    setIteration(iterations[index])
  }, [iterations, index])

  const updateIterations = (_iteration) => {
    const cloned = [...iterations]
    cloned.splice(index, 1, _iteration)

    setIterations(cloned)
  }
  
  const onClickRemove = () => {
    const cloned = [...iterations]
    cloned.splice(index, 1)

    setIterations(cloned)
  }

  const onClickSelection = (sel) => {
    const clonedIteration = { ...iteration }
    
    clonedIteration.selection ^= sel

    updateIterations(clonedIteration)
  }

  const onClickCollapse = () => {
    updateIterations({ ...iteration, collapse: !iteration.collapse })
  }

  return (
    <div className={`bg-black text-xl p-4 w-full ${roundedTClass} ${roundedBClass}`}>
      <div className={`flex items-center hover:cursor-pointer`} onClick={onClickCollapse}>
        <div className='flex-none w-20'>PE-{index + 1}</div>
        <div className='flex-auto w-64 text-gray-400 hover:text-white'>{iteration.title}</div>
        <div className='flex-none'>Selection</div>
        <div className={`flex-none p-[6px] ml-4 rounded-full bg-${iteration.selection > 0 ? 'green' : 'gray'}-500`}></div>
      </div>
      <div className={`flex justify-start font-bold transition-all duration-300 ${!iteration.collapse ? 'hidden' : ''}`}>
        <div className='w-20'></div>
        <div className='flex-auto py-4'>
          {Object.keys(selections).map(sel =>
            <button key={sel}
              className={`px-4 py-2 m-2 uppercase hover:border-initial focus:outline-0 focus:border-initial border-2 border-${sel & iteration.selection ? 'green' : 'gray'}-500`}
              onClick={() => onClickSelection(sel)}
            >
              {selections[sel]}
            </button>)}
          <div className='border-t-2 border-gray-700 py-4 mt-4 text-center uppercase hover:cursor-pointer hover:text-white' onClick={onClickRemove}>
            Remove
          </div>
          <div className='hidden border-green-500 boreder-gray-500 bg-green-500 bg-gray-500'></div>
        </div>
      </div>
    </div>
  )
}

export default Iteration