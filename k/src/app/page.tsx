export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, clean, and beautiful page built with Next.js and Tailwind CSS
          </p>
        </header>

        {/* Main Content */}
        <main className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-600">
              Built with Next.js for optimal performance and lightning-fast page loads.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful</h3>
            <p className="text-gray-600">
              Designed with Tailwind CSS for a modern and responsive user interface.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple</h3>
            <p className="text-gray-600">
              Clean and minimal design that focuses on content and user experience.
            </p>
          </div>
        </main>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              This is a basic page template that you can customize for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Get Started
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>&copy; 2024 Your Project. Made with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}
