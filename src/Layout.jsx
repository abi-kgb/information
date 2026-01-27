export default function Layout({ children, onMenu }) {
  return (
    <div className="relative min-h-screen">

      {/* PAGE CONTENT */}
      <main className="relative">
        {children}
      </main>

      {/* FIXED MENU BUTTON */}
      <button
        onClick={onMenu}
        className="
          fixed bottom-8
          left-1/2 -translate-x-1/2
          z-[9999]
          px-16 py-4
          rounded-xl
          bg-blue-500 text-white text-lg font-semibold
          shadow-[0_0_30px_rgba(59,130,246,1)]
          hover:scale-105 active:scale-95
          transition
        "
      >
        MENU
      </button>

    </div>
  );
}
