export default function CategoryBadge({ label }) {
  return (
    <span className={"px-3 py-2 rounded-full text-sm font-medium bg-gray-200"}>
      {label}
    </span>
  );
}
