export default function GridPoint({ x, y, name, status, onClick }) {
  return (
    <div
      onClick={onClick}
      title={name}
      className={`absolute rounded-full w-3 h-3 cursor-pointer transition-all duration-300
        ${status === "threat" ? "bg-krprRed animate-pulse" : "bg-krprWhite"}`}
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
