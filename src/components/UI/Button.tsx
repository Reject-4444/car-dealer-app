import cn from 'classnames';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700',
        { 'opacity-50 cursor-not-allowed': disabled }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
