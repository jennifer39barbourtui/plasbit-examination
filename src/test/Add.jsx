/* eslint-disable react/display-name */
import { forwardRef, useContext, useMemo } from 'react'
import EMContext from './PEContext'

const Add = forwardRef((_, ref) => {
  const { iterations, setIterations } = useContext(EMContext)
  const roundedTClass = useMemo(() => iterations.length ? '' : 'rounded-t-lg', [iterations])

  const onClickGenerate = () => {
    setIterations([...iterations, {
      title: ref.current.value.trim().length === 0 ? ref.current.value : 'Iteration title',
      selection: 0
    }])

    ref.current.value = ""
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClickGenerate()
    }
  }

  return (
    <div className='text-xl w-full'>
      <div className={`p-4 ${roundedTClass} rounded-b-lg flex items-center bg-black`}>
        <div className='flex-none w-20'>PE-{iterations.length + 1}</div>
        <div className='flex-auto'>
          <input type="text" ref={ref} placeholder='Adding iteration...' className='bg-transparent py-1 px-2 w-full text-white' onKeyDown={onKeyDown} />
        </div>
      </div>
      <div className='mt-6 rounded-lg p-6 bg-black'>
        To add a new iteration, start typing a prompt or 
        <span className='underline hover:cursor-pointer hover:text-green-500' onClick={onClickGenerate}> generate</span> one.
      </div>
    </div>
  )
})

export default Add