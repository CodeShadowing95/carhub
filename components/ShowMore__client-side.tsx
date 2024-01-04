"use client";

import { ShowMoreProps1 } from "@/types"
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps1) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit);
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title="Show more"
                btnType='button'
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore