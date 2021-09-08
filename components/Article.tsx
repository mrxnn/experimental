export default function Article({ index, description, classes = "" }) {
  return (
    <div className="flex items-center border-b-2 py-9">
      <p className={`w-36 ${classes}`}>{index}</p>
      <p className={`font-light tracking-wide flex-1 ${classes}`}>
        {description}
      </p>
      {classes && <p className="rotate-90 opacity-50">&rarr;</p>}
    </div>
  );
}
