import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-red-600">
      <h1 className="text-2xl font-bold tracking-wide">AI SecGrid</h1>
      <nav className="flex items-center space-x-8">
        <Link to="/" className="hover:text-red-500 transition">
          Home
        </Link>

        <div className="relative group">
          <button className="hover:text-red-500 transition">Sectors ▾</button>

          <div className="absolute hidden group-hover:block bg-black border border-red-600 rounded-md mt-2 p-2 w-56 z-10">
            <Link to="/Chemical" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Chemical</Link>
            <Link to="/Commercial" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Commercial</Link>
            <Link to="/Communications" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Communications</Link>
            <Link to="/CriticalManufacturing" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Critical Manufacturing</Link>
            <Link to="/Dams" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Dams</Link>
            <Link to="/Defense" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Defense</Link>
            <Link to="/Emergency" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Emergency Services</Link>
            <Link to="/energy" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Energy</Link>
            <Link to="/financial" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Financial</Link>
            
            {/* Encoded special names */}
            <Link to="/Food%26Agriculture" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Food & Agriculture</Link>
            <Link to="/Healthcare%26PublicHealth" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Healthcare & Public Health</Link>
            <Link to="/NuclearReactors%2FMaterials" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Nuclear Reactors / Materials</Link>
            <Link to="/Water%26Wastewater" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Water & Wastewater</Link>

            <Link to="/Government" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Government</Link>
            <Link to="/IT" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">IT</Link>
            <Link to="/Transportation" className="block px-3 py-2 hover:bg-red-600 hover:text-black rounded">Transportation</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
