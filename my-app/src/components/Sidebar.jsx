import { useTheme } from "../hooks/useTheme";

const Sidebar = () => {
  const { colors } = useTheme();
  return (
    <aside className={`w-64 border-r ${colors.border} hidden md:flex flex-col`}>
      <div className="p-4 font-semibold">📚 College Assistant</div>
      <nav className="flex-1 p-4 text-sm">
        <ul className="space-y-2">
          <li className={`${colors.textMuted}`}>Home</li>
          <li className={`${colors.textMuted}`}>Policies</li>
          <li className={`${colors.textMuted}`}>Resources</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
