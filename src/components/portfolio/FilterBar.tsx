"use client";

export type FilterOption = "All" | "Video" | "Graphic Design" | "Web Design";

const filters: FilterOption[] = ["All", "Video", "Graphic Design", "Web Design"];

interface FilterBarProps {
  active: FilterOption;
  onChange: (filter: FilterOption) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-colors ${
            active === filter
              ? "bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white border-transparent"
              : "border border-gray-300 text-[#1d1d1f] hover:border-[#2D6A4F] hover:text-[#2D6A4F]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
