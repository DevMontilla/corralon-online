"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import { IoSearchOutline } from "react-icons/io5";

interface SearchBoxProps {
  placeholder?: string;
}

export const SearchBox = ({ placeholder }: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/product/${query}`);
    }
    setQuery('')
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 bg-white rounded-full px-3 py-1">
      <input
        type="text"
        value={query}
        onChange={(e)=>handleChange(e)}
        placeholder={placeholder}
        className="font-light focus:outline-none"
      />
      <button
        type="submit"
        className=""
      >
        <IoSearchOutline className="w-5 h-5" />
      </button>
    </form>
  );
};
