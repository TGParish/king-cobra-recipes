export default function Navbar() {
  return (
    <nav className="text-green-500 bg-black p-4">
      <div className="flex justify-between">
        <div className="font-creepster text-3xl">
          <a href="/">King Cobra Recipes</a>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-2">
            <li className="font-bold">
              <a href="/about">About</a>
            </li>
            <li className="font-bold">
              <a href="/contribute">Contribute</a>
            </li>
          </ul>
          {/* <input
            type="search"
            name=""
            id="recipe-search"
            placeholder="Search dank recipes..."
            className="bg-black border-green-500 border-2 text-green-500 p-1"
          /> */}
        </div>
      </div>
    </nav>
  );
}
