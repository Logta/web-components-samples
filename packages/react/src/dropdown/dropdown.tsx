import React, { useState, useEffect, useRef } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './dropdown.module.css';
import cssText from './dropdown.module.css?inline';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options?: string; // JSON string
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string, option: DropdownOption) => void;
}

function ReactDropdown({
  options: optionsJson = '[]',
  selected = '',
  placeholder = 'Select an option',
  disabled = false,
  onChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'react-dropdown-styles';
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
      if (onChange) {
        onChange(option.value, option);
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

const ReactDropdownElement = reactToWebComponent(ReactDropdown, React, ReactDOMClient);

if (!customElements.get('react-dropdown')) {
  customElements.define('react-dropdown', ReactDropdownElement);
}

export default ReactDropdown;
export { ReactDropdownElement };
