import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import useCoversation from '../../zustand/useCoversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useCoversation();
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    if(search.length < 3) {
      return toast.error("Search must be at least 3 characters long!");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error("No such User found");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-centre gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
        value={search} onChange={(e) => setSearch(e.target.value)} />

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
