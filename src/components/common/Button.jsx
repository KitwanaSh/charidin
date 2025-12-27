export default function Button({ 
    children, 
    variant = 'primary', 
    className = '', 
    ...props 
  }) {
    const baseStyles = 'px-6 py-3 font-medium transition-all duration-200 rounded';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }