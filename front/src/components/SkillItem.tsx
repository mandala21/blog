import React from "react";

export type SkillItemProps = {
    icon: React.ReactNode,
    title: string,
}



const SkillItem: React.FC<SkillItemProps> = ({ icon, title }) => {
    return (
        <div className="flex mb-4">
            {icon}
            <div className="flex flex-col ml-4 justify-center">
                <span className="block font-bold text-gray-800 ">{title}</span>
                {/* <span className="block font-thin leading-4">{description}</span> */}
            </div>
        </div>
    )
}

export default SkillItem;
