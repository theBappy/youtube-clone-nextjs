
'use client'

import { useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { APP_URL } from "@/constants";
import { Button } from "@/components/ui/button";

export const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = new URL("/search", APP_URL ? `https://${APP_URL}` : "http://localhost:3000")
    const newQuery = value.trim()

    url.searchParams.set('query', encodeURIComponent(newQuery))

    if(newQuery === ''){
      url.searchParams.delete('query')
    }
    setValue(newQuery)
    router.push(url.toString())
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:marker:border-blue-500"
        />
        {value && (
          <Button
          type='button'
          variant='ghost'
          size='icon'
          onClick={() => setValue("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
          >
            <XIcon className="text-gray-500" />
          </Button>
        )}
      </div>
      <button
        disabled={!value.trim()}
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
