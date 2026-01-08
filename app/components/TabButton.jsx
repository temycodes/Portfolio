function TabButton({ active, selectTab, children }) {
  const base = "mr-3 font-semibold text-xl uppercase cursor-pointer transition-all duration-300";
  const activeColor = active ? "text-(--violet-700)" : "text-(--midnight-900)";

  return (
    <button onClick={selectTab} className={`${base} hover:text-(--violet-700) ${activeColor}`}>
      {children}
    </button>
  );
}

export default TabButton;
