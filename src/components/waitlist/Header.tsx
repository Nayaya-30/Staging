export default function Header() {
	return (
			     <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* LEFT: Logo */}
            <a
              href="#"
              className="flex items-center space-x-2 cursor-pointer shrink-0"
            >
              <Image
                src="/logo.png"
                alt="StockKeeper Logo"
                width={30}
                height={30}
                className="h-8 w-auto"
              />
              <span className="text-xl sm:text-[24px] font-bold text-[#111827]">
                StockKeeper
              </span>
            </a>

            {/* CENTER: Navigation Links (Hidden on mobile) */}
            <nav className="hidden md:flex absolute inset-x-0 justify-center pointer-events-none">
              <div className="flex space-x-3 items-center pointer-events-auto">
                <NavItem href="#features">Features</NavItem>
                <NavItem href="#benefits">Benefits</NavItem>
                <NavItem href="#faq">FAQ</NavItem>
              </div>
            </nav>

            {/* RIGHT: Button and Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button
                className={`
            hidden md:flex 
            text-sm ml-6
            px-5 py-2.5 sm:px-6 sm:py-3 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            
            bg-[${PRIMARY_COLOR}] text-white border border-transparent 
            
            hover:bg-white 
            hover:border-[#800020]
            hover:text-[#000000] 
            hover:cursor-pointer
          `}
                onClick={handleScrollToJoin}
              >
                Join Waitlist
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                className="md:hidden p-2 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-40 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 max-w-full shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}
          style={{
            backgroundColor: ACCENT_COLOR,
            transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          {/* Close Button (Unchanged) */}
          <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200 cursor-pointer">
            <span className="text-lg font-bold text-[#111827]">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Items - FIX APPLIED HERE */}
          <div className="flex flex-col space-y-2 py-4">
            <NavItem
              href="#features"
              onClick={handleNavItemClick}
              className="hover:text-[#800020]" 
            >
              Features
            </NavItem>
            <NavItem
              href="#benefits"
              onClick={handleNavItemClick}
              className="hover:text-[#800020]" 
            >
              Benefits
            </NavItem>
            <NavItem
              href="#faq"
              onClick={handleNavItemClick}
              className="hover:text-[#800020]"
            >
              FAQ
            </NavItem>
            <div className="pt-4 mt-2 border-t border-gray-200 px-4">
              <Button
                variant="primary"
                className="w-full text-base"
                style={{ background: PRIMARY_COLOR }}
                onClick={() => {
                  handleNavItemClick();
                  handleScrollToJoin();
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>
		
		)
}