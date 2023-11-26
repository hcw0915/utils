import { useState, useEffect, useRef } from "react";

type Position = {
  top: number;
  left: number;
};

type PopoverProps = {
  buttonText: string;
  content: React.ReactNode;
  position?: Position;
};

export const Popover = ({ buttonText, content, position }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);
  const anchorEl = useRef<HTMLButtonElement>(null);

  const calculatePosition = () => {
    if (anchorEl.current) {
      const rect = anchorEl.current.getBoundingClientRect();
      return { top: rect.bottom, left: rect.left };
    }
    return { top: 0, left: 0 };
  };

  const togglePopover = () => {
    if (position) {
      setPopoverPosition(calculatePosition());
    }
    setIsOpen(!isOpen);
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "10px",
  };

  const popoverStyle: React.CSSProperties = {
    position: "absolute",
    top: `${popoverPosition.top}px`,
    left: `${popoverPosition.left}px`,
    zIndex: 1000,
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    borderRadius: "4px",
    minWidth: "200px",
    border: "1px solid #ddd",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button ref={anchorEl} onClick={togglePopover} style={buttonStyle}>
        {buttonText}
      </button>
      {isOpen && (
        <div ref={popoverRef} style={popoverStyle}>
          {content}
        </div>
      )}
    </div>
  );
};
