export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Eyebrow / tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Now with interactive visualisations
                </div>

                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                    Learn algorithms through{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        visual storytelling
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Interactive tutorials that show you how sorting, searching, and graph
                    algorithms work — step by step, with code and visualisations side by side.
                </p>

                {/* CTA button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/blog"
                        className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors shadow-lg shadow-gray-900/20"
                    > Start Reading </a>
                    <a
                        href="/algorithms"
                        className="px-8 py-3 border-gray-300 border text-gray-700 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    > Try the visualizer </a>
                </div>
            </div>
        </section>
    );
}