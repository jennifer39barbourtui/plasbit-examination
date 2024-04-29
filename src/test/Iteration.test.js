import renderer from 'react-test-renderer'

import Iteration from './Iteration'

test('renders learn react link', () => {
  const tree = renderer.create(<Iteration />).toJSON()
  expect(tree).toMatchInlineSnapshot(`
<div
  className="bg-black text-xl p-4 w-full  "
>
  <div
    className="flex items-center hover:cursor-pointer"
    onClick={[Function]}
  >
    <div
      className="flex-none w-20"
    >
      PE-
      NaN
    </div>
    <div
      className="flex-auto w-64 text-gray-400 hover:text-white"
    />
    <div
      className="flex-none"
    >
      Selection
    </div>
    <div
      className="flex-none p-[6px] ml-4 rounded-full bg-gray-500"
    />
  </div>
  <div
    className="flex justify-start font-bold transition-all duration-300 hidden"
  >
    <div
      className="w-20"
    />
    <div
      className="flex-auto py-4"
    >
      <button
        className="px-4 py-2 m-2 uppercase hover:border-initial focus:outline-0 focus:border-initial border-2 border-gray-500"
        onClick={[Function]}
      >
        Short
      </button>
      <button
        className="px-4 py-2 m-2 uppercase hover:border-initial focus:outline-0 focus:border-initial border-2 border-gray-500"
        onClick={[Function]}
      >
        Medium Length
      </button>
      <button
        className="px-4 py-2 m-2 uppercase hover:border-initial focus:outline-0 focus:border-initial border-2 border-gray-500"
        onClick={[Function]}
      >
        Very Very Very Long (Up to 35 Char)
      </button>
      <div
        className="border-t-2 border-gray-700 py-4 mt-4 text-center uppercase hover:cursor-pointer hover:text-white"
        onClick={[Function]}
      >
        Remove
      </div>
      <div
        className="hidden border-green-500 boreder-gray-500 bg-green-500 bg-gray-500"
      />
    </div>
  </div>
</div>
`)
})