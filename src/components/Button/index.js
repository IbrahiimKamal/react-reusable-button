const Button = ({ children, className, accent, outline, size, ...props }) => {
  const BUTTON_COLORS = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark',
  };

  const BUTTON_SIZE = {
    sm: 'btn-sm',
    lg: 'btn-lg',
  };

  const color = BUTTON_COLORS[accent];
  const sizeClass = BUTTON_SIZE[size];

  return (
    <button
      className={`btn ${className ? className : ''} ${
        outline ? `btn-outline-${color}` : `btn-${color}`
      } ${size ? `${sizeClass}` : ''}`}
      {...props}
    >
      {children || 'Click'}
    </button>
  );
};

export default Button;
