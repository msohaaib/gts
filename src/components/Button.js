// components/AnimatedLink.jsx
import Link from "next/link";

const Button = ({ href, children, isActive, onClick, className }) => {
  return (
    <Link href={href} onClick={onClick} className={`group ${className}`}>
      <div className="relative overflow-hidden inline-block">
        <span
          className={`block transition-all duration-[500ms] font-bold ease-out group-hover:-translate-y-7 ${
            isActive
              ? "text-[#F58634]"
              : "text-gray-800 group-hover:text-[#F58634]"
          }`}
        >
          {children}
        </span>
        <span
          className={`absolute top-7 left-0 transition-all font-bold duration-[500ms] ease-out group-hover:top-0 ${
            isActive
              ? "text-[#F58634]"
              : "text-gray-800 group-hover:text-[#F58634]"
          }`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export default Button;
