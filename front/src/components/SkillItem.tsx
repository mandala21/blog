import React, { useState } from "react";

export type SkillItemProps = {
    icon: React.ReactNode,
    description: string,
    title: string,
}



const SkillItem: React.FC<SkillItemProps> = ({ icon, description, title }) => {
    return (
        <div className="flex mb-4">
            {icon}
            <div className="flex flex-col ml-4">
                <span className="block font-bold text-gray-800">{title}</span>
                <span className="block font-thin leading-4">{description}</span>
            </div>
        </div>
    )
}

export default SkillItem;
