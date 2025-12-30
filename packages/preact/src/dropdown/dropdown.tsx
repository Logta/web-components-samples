import { useState, useEffect, useRef } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './dropdown.module.css';
import cssText from './dropdown.module.css?inline';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options?: string;
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
  onvaluechange?: string;
}

function PreactDropdown({
  options: optionsJson = '[]',
  selected = '',
  placeholder = 'Select an option',
  disabled = false,
  onvaluechange = ''
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'preact-dropdown-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  // Parse options JSON
  useEffect(() => {
    try {
      const opts = typeof optionsJson === 'string' ? JSON.parse(optionsJson) : optionsJson;
      setParsedOptions(opts);
    } catch (e) {
      console.error('Invalid options JSON:', e);
      setParsedOptions([]);
    }
  }, [optionsJson]);

  // Update selected value when prop changes
  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (!disabled) {
      setSelectedValue(option.value);
      setIsOpen(false);

      // onvaluechange属性が設定されている場合は実行
      if (onvaluechange) {
        try {
          const fn = new Function('value', 'option', onvaluechange);
          fn(option.value, option);
        } catch (e) {
          console.error('Error executing onvaluechange:', e);
        }
      }
    }
  };

  const selectedOption = parsedOptions.find(opt => opt.value === selectedValue);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;
  const isPlaceholder = !selectedOption;

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={`${styles.button} ${disabled ? styles.buttonDisabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        type="button"
      >
        <span className={isPlaceholder ? styles.placeholder : ''}>
          {displayLabel}
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {parsedOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.item} ${option.value === selectedValue ? styles.itemSelected : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

register(PreactDropdown, 'preact-dropdown', ['options', 'selected', 'placeholder', 'disabled', 'onvaluechange'], { shadow: false });

export default PreactDropdown;
