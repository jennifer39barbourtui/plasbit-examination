import renderer from 'react-test-renderer'

import Add from './Add'

test('renders learn react link', () => {
  const tree = renderer.create(<Add />).toJSON()
  expect(tree).toMatchInlineSnapshot(`
<div
  className="text-xl w-full"
>
  <div
    className="p-4 rounded-t-lg rounded-b-lg flex items-center bg-black"
  >
    <div
      className="flex-none w-20"
    >
      PE-
      1
    </div>
    <div
      className="flex-auto"
    >
      <input
        className="bg-transparent py-1 px-2 w-full text-white"
        onKeyDown={[Function]}
        placeholder="Adding iteration..."
        type="text"
      />
    </div>
  </div>
  <div
    className="mt-6 rounded-lg p-6 bg-black"
  >
    To add a new iteration, start typing a prompt or
    <span
      className="underline hover:cursor-pointer hover:text-green-500"
      onClick={[Function]}
    >
       generate
    </span>
     one.
  </div>
</div>
`)
})