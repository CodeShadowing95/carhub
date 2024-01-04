"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { SearchManufacturer2 } from "./";
import { SearchbarProps } from "@/types";

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherclasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
)

const Searchbar = ({ setManufacturer, setModel }: SearchbarProps) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(searchManufacturer === '' && searchModel === '') {
            return alert('Please fill in the search bar');
        }

        setModel(searchModel);
        setManufacturer(searchManufacturer);
    }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer2
                selected={searchManufacturer}
                setSelected={setSearchManufacturer}
            />
            <SearchButton otherclasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
            <Image
                src="/model-icon.png"
                width={25}
                height={25}
                className="absolute w-[20px] h-[20px] ml-4"
                alt="car model"
            />
            <input
                type="text"
                name="model"
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                placeholder="Tiguan"
                className="searchbar__input"
            />
            <SearchButton otherclasses="sm:hidden" />
        </div>
        <SearchButton otherclasses="max-sm:hidden" />
    </form>
  )
}

export default Searchbar