const ContributorCard = ({name, role, image}) => {
    return (
        <div className="bg-slate-800 rounded-3xl flex flex-col items-center p-8 w-full gap-4 light:bg-slate-300">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-600 light:border-slate-300">
                <img 
                    src={image} 
                    alt={name}
                />
            </div>
            <div className="text-center">
                <h3 className="text-[18px]/[28px] font-bold text-white light:text-black">
                    {name}
                </h3>
                <p className="mb-[26px] text-[14px]/[20-px] font-semi-bold text-[#9CA3AF] light:text-[#5CA3AF]">
                    {role}
                </p>
            </div>
        </div>
    );
};

export default ContributorCard;