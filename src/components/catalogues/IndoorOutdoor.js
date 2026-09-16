"use client";

export default function IndoorOutdoorToggle({
    value,
    onChange,
}) {
    const isIndoor = value === "Indoor";

    return (
        <div className="flex items-center gap-3">
            <span
                className={`text-[24px] font-body leading-[150%] tracking-[-4%] transition-colors ${isIndoor ? "text-white/60" : "text-white"
                    }`}
            >
                Indoor
            </span>

            <button
                type="button"
                onClick={() =>
                    onChange(isIndoor ? "Outdoor" : "Indoor")
                }
                className={`relative h-6 w-12 rounded-full transition-colors duration-300 ${isIndoor ? "bg-green-500" : "bg-gray-300"
                    }`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${isIndoor
                        ? "translate-x-1"
                        : "-translate-x-5"
                        }`}
                />
            </button>

            <span
                className={`text-[24px] font-body leading-[150%] tracking-[-4%] transition-colors ${!isIndoor ? "text-white/60" : "text-white"
                    }`}
            >
                Outdoor
            </span>
        </div>
    );
}