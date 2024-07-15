type AlertProps = {
  msg: string;
};

const Alert: React.FC<AlertProps> = ({ msg }) => {
  return <div className="text-red-500 text-sm w-full font-bold">* {msg}</div>;
};
export default Alert;
