import { PE } from './test/PE'
import './App.css'

function App() {
  return (
    <>
      <h1 className="mb-8 font-bold text-2xl flex">
        <div className='flex items-center m-auto'>
          <img src="/blue-logo.svg" alt="" width={200} /> Examination
        </div>
      </h1>
      <div className='flex flex-col gap-5 p-4 bg-black'>
        <PE iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <PE locked={true} iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <PE collapse={true} iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <PE iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <PE iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
      </div>
    </>
  )
}

export default App
