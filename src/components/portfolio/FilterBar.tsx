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
          className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors ${
            active === filter
              ? "bg-black text-white"
              : "border border-gray-300 text-gray-600 hover:border-black hover:text-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
