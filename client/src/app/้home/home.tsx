export default function HomePage() {
    return (
        <>
            <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/35 to-blue-600/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-16 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/25 to-blue-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                            backgroundSize: '20px 20px'
                        }}></div>
                    </div>

                    <div className="relative flex justify-center mb-8">
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg"></div>
                    </div>

                    <div className="relative text-center space-y-8">
                        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
                            ยินดีต้อนรับ
                        </h1>

                        <div className="relative">
                            <p className="text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed font-medium">
                                ระบบปฏิบัติงานระบบทวิภาคี ปริญญาตรี
                            </p>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-3 items-center">
                            <div className="w-10 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md"></div>
                            <div className="w-14 h-2.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md"></div>
                            <div className="w-10 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md"></div>
                        </div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-ping shadow-lg"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full animate-ping shadow-md" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-ping shadow-md" style={{ animationDelay: '1.5s' }}></div>

                    <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-blue-300/10 rounded-full blur-sm"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-blue-200/20 to-blue-300/10 rounded-full blur-sm"></div>
                </div>
            </div>
        </>
    )
}