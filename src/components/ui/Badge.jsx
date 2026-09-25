const badgeTypes = {
  main: {
    color: "text-blue-500 border-blue-500",
    bgColor: "bg-[#162456]",
  },
  danger: {
    color: "text-red-500 border-red-500",
    bgColor: "bg-[#4E1313]",
  },
  warning: {
    color: "text-yellow-500 border-yellow-500",
    bgColor: "bg-[#4E3C10]",
  },
  success: {
    color: "text-green-400 border-green-400",
    bgColor: "bg-[#114E30]",
  },
};

export function Badge({ type = "main", icon: Icon, message, className = "" }) {
  const badge = badgeTypes[type];

  return (
    <span
      className={`
        flex items-center justify-center border py-2 m-3 rounded-3xl text-xs font-bold
        ${badge.color}
        ${badge.bgColor}
        ${className}
      `}
    >
      {Icon && <Icon className="mr-1 size-4" />}
      {message}
    </span>
  );
}
