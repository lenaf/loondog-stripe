
export default function Button(
  {
    children,
    className = '',
    ...rest
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`btn rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
