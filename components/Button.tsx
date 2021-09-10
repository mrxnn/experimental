export default function Button({ text, icon, className = "", onClick = null }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black rounded-full px-4 py-1 flex items-center space-x-4 ${className}`}>
      <p className="font-medium tracking-tight">{text}</p>
      {icon}
    </button>
  );
}
