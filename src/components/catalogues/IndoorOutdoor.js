"use client";

export default function IndoorOutdoorToggle({
    value,
    onChange,
}) {
    const isIndoor = value === "Indoor";

    return (
        <div className="flex items-center gap-3">
            <span
                className={`text-sm font-medium transition-colors ${isIndoor ? "text-black" : "text-gray-400"
                    }`}
            >
                Indoor
            </span>

            <button
                type="button"
                onClick={() =>
                    onChange(isIndoor ? "Outdoor" : "Indoor")
                }
                className={`relative h-8 w-16 rounded-full transition-colors duration-300 ${isIndoor ? "bg-green-500" : "bg-gray-300"
                    }`}
            >
                <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${isIndoor
                        ? "translate-x-1"
                        : "-translate-x-7"
                        }`}
                />
            </button>

            <span
                className={`text-sm font-medium transition-colors ${!isIndoor ? "text-black" : "text-gray-400"
                    }`}
            >
                Outdoor
            </span>
        </div>
    );
}