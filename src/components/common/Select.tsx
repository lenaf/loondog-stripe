
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export default function Select(
  {
    className = '',
    id,
    label,
    children,
    ...rest
  }: SelectProps) {
  return (
    <div className='form-control'>
      {label && <label htmlFor={id} className="label-text">{label}</label>}
      <select
        {...rest}
        id={id}
        className={`select select-bordered ${className}`}
      >
        {children}
      </select>
    </div>
  );
}
