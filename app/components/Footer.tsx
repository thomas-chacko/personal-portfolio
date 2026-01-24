export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 border-t border-white/5 py-8 md:py-12">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-white tracking-tight">Thomas Chacko</h4>
                    <p className="text-xs text-neutral-500 mt-1">
                        Built with Next.js, motion & caffeine.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        All Systems Normal
                    </span>
                </div>

                <div className="text-xs text-neutral-600 font-medium">
                    © {currentYear} Personal Portfolio.
                </div>

            </div>
        </footer>
    );
};
