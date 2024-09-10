
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input(
  {
    className = '',
    id,
    label,
    ...rest
  }: InputProps) {
  return (
    <div className='form-control'>
      {label && <label htmlFor={id} className="label-text">{label}</label>}
      <input
        {...rest}
        id={id}
        className={`input input-bordered ${className}`}
      />
    </div>
  );
}
