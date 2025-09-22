import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { colors } = useTheme();
  return (
    <header className={`p-4 border-b ${colors.border} ${colors.bgInput}`}>
      <h1 className="font-bold text-lg">College Assistant Chat</h1>
    </header>
  );
};

export default Header;
