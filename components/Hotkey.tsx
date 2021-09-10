const Hotkey = ({ keys }: { keys: string[] }) => (
  <p className="flex space-x-1 text-sm">
    {keys.map((key, index) => (
      <span
        key={index}
        className="bg-white/10 px-1 py-[1px] opacity-70 rounded border border-white border-opacity-20">
        {key}
      </span>
    ))}
  </p>
);

export default Hotkey;
