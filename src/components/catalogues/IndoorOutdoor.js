"use client";

export default function IndoorOutdoorToggle({
    value,
    onChange,
}) {
    const isIndoor = value === "Indoor";

    return (
        <div className="flex items-center gap-3">
            <span
                className={`text-lg font-semibold transition-colors ${isIndoor ? "text-gray-400" : "text-white"
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
                className={`text-lg font-semibold transition-colors ${!isIndoor ? "text-gray-400" : "text-white"
                    }`}
            >
                Outdoor
            </span>
        </div>
    );
}