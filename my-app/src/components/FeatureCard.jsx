import { ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

const FeatureCard = ({ icon: IconComponent, title, description, features, buttonText, onClick, isPrimary = false }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`${colors.bgSecondary} border ${colors.border} rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:${colors.bgHover} hover:shadow-xl`}>
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
        {/* Icon */}
        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${isPrimary ? 'bg-blue-600' : colors.bgTertiary} rounded-xl sm:rounded-2xl flex items-center justify-center`}>
          <IconComponent 
            size={24} 
            className={isPrimary ? 'text-white' : colors.accent}
          />
        </div>
        
        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-semibold ${colors.textPrimary}`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm sm:text-base ${colors.textMuted} leading-relaxed`}>
          {description}
        </p>
        
        {/* Features */}
        {features && (
          <ul className="space-y-2 w-full">
            {features.map((feature, index) => (
              <li key={index} className={`text-sm ${colors.textSecondary} flex items-center justify-center`}>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* Button */}
        <button
          onClick={onClick}
          className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
            isPrimary 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
              : `${colors.accentSecondaryBg} text-white shadow-md hover:shadow-lg`
          }`}
        >
          <span>{buttonText}</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;