// higher order component that takes an Icon component and returns a Button

const IconButton = (Icon) => (props) => {
  const { text } = props;

  const Button = (
    <button className="bg-white text-black rounded-full px-4 py-1 ml-20 flex items-center space-x-4">
      <p className="font-medium tracking-tight">{text}</p>
      <Icon />
    </button>
  );

  return Button;
};

export default IconButton;
