/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from 'react'
import EMContext from './PEContext'
import Iteration from './Iteration'
import Add from './Add'

export const PE = ({
  collapse: _collapse = false,
  locked: _locked,
  iterations: _iterations,
}) => {
  const ref = useRef();
  const [locked, setLocked] = useState(_locked || false)
  const [iterations, setIterations] = useState(_iterations || [])
  const [collapse, setCollapse] = useState(_collapse)
  const [adding, setAdding] = useState(false)
  const gray = useMemo(() => !iterations.length || locked || !collapse,
    [locked, iterations, collapse])
  
  useEffect(() => {
    if (iterations.length === 0) {
      setAdding(true)
    }
  }, [iterations])
  
  const onClickAdd = () => {
    setIterations([...iterations, {
      title: ref.current.value.trim().length > 0 ? ref.current.value : 'Iteration title',
      selection: 0
    }])

    ref.current.value = ""
  }

  return (
    <EMContext.Provider value={{ adding, iterations, setIterations }}>
      <div className='rounded-lg p-6 bg-zinc-900 text-left text-zinc-600 w-[600px]'>
        <div className='flex justify-between items-center hover:cursor-pointer' onClick={() => setCollapse(!collapse)}>
          <div className={`${gray ? 'text-gray-400' : 'text-white'} font-bold text-2xl flex items-center`}>
            <img src="/plasbit.ico" width={30} className='mr-3'/>
            Plasbit Examination
          </div>
          {iterations.length > 0 &&
          <>
            {locked && <svg className="w-[32px] h-[32px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z" clipRule="evenodd"/>
              </svg>}
            {!locked && <svg className="w-[32px] h-[32px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z" clipRule="evenodd"/>
              </svg>}
          </>
          }
        </div>
        <div className={`${collapse ? '' : 'hidden'}`}>
          <div className='mt-4 rounded-lg flex flex-col gap-1'>
            {iterations.map((_, index) => <Iteration index={index} key={index} />)}
            {adding && <Add ref={ref} />}
          </div>
          <div className='ml-auto mt-6 mr-0 text-right font-bold'>
            {adding &&
              <>
                <span className='px-4 uppercase hover:cursor-pointer hover:text-white' onClick={() => setAdding(false)}>Cancel</span>
                <span className='px-4 uppercase hover:cursor-pointer hover:text-white' onClick={onClickAdd}>Done</span>
              </>
            }
            {!adding &&
              <>
                <span className='px-4 uppercase hover:cursor-pointer hover:text-white' onClick={() => setLocked(!locked)}>{locked ? 'Unlock' : 'Lock'}</span>
                <span className='px-4 uppercase hover:cursor-pointer hover:text-white'>Reset</span>
                <span className='px-4 uppercase hover:cursor-pointer hover:text-white' onClick={() => setAdding(true)}>+ Add Iteration</span>
              </>
            }
          </div>
        </div>
      </div>
    </EMContext.Provider>
  )
}