export default function Button({ text, icon, onClick = null }) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black rounded-full px-4 py-1 ml-20 flex items-center space-x-4">
      <p className="font-medium tracking-tight">{text}</p>
      {icon}
    </button>
  );
}
