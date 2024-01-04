import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionsProps { 
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
}

export interface CustomFilterProps1 {
    title: string;
    options: OptionsProps[];
    setFilter: (e: any) => void;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface SearchManufacturerProps1 {
    selected: string;
    setSelected: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface ShowMoreProps1 {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchbarProps {
    setManufacturer: (s: string) => void;
    setModel: (s: string) => void;
}

export interface HomeProps {
    searchParams: FilterProps;
}