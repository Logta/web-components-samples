import { useEffect } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './button.module.css';
import cssText from './button.module.css?inline';

interface ButtonProps {
  label?: string;
  variant?: string;
  size?: string;
  disabled?: boolean;
}

function PreactButton({
  label = 'Button',
  variant = 'primary',
  size = 'medium',
  disabled = false
}: ButtonProps) {
  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'preact-button-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  const buttonClasses = [
    styles.button,
    styles[variant as keyof typeof styles] || styles.primary,
    size !== 'medium' ? styles[size as keyof typeof styles] : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
}

register(PreactButton, 'preact-button', ['label', 'variant', 'size', 'disabled'], { shadow: false });

export default PreactButton;
