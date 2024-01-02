"use client";

import { CustomFilterProps } from "@/types";
import Image from "next/image";

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div>{title}</div>
  )
}

export default CustomFilter