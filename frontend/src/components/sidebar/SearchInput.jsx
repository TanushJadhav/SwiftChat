import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-centre gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <IoIosSearch className="w-5 h-5 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput;



// import { IoIosSearch } from "react-icons/io";

// const SearchInput = () => {
//   return (
//     <form className="flex items-centre gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//             <IoIosSearch className="w-5 h-5 outline-none"/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput;
