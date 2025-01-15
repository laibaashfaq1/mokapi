// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="flex justify-between items-center py-4 px-2 bg-white">
//       {/* Left Side Logo */}
//       <nav className="font-bold">
//         <Link href={"/"} className="text-2xl sm:text-3xl text-yellow-500 dark:text-light">
//           Food<span className="text-yellow-500">Express</span>
//         </Link>
//       </nav>
      
//       {/* Right Side About Button */}
//       <nav>
//         <Link 
//         href={"/"} 
//         className="text center text-lg font-medium text-gray-700 hover:text-yellow-500 dark:text-light dark:hover:text-yellow-500">
//           About
//         </Link>

//       </nav>
//     </header>
//   );
// }


import Link from "next/link";


export default function Navbar() {
  return (
    <header className="flex flex-col xs:flex-row items-center justify-between py-4 px-2">
      <nav className="flex items-center justify-center font-bold">
        <Link href={"/"} className="text-2xl sm:text-3xl text-yellow-500">
          Food<span className="text-yellow-500">Express</span>
        </Link>
      </nav>
    </header>
  );
}