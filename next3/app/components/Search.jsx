'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {
    const[serach, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${serach}/`)
    }
  return (
    <form onSubmit={handleSubmit} className='w-50 flex justify-center md:justify-between'>
        <input 
            type="text"
            value={serach}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 w-80 text-xl rounded-xl"
            placeholder='Search'
        />
        <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
            🚀
        </button>
    </form>
  )
}

export default Search