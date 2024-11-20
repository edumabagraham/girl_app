export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-[#FF4B91] mb-8">
                Welcome to Girls App
            </h1>
            <div className="space-x-4">
                <a
                    href="/auth/login"
                    className="bg-[#FF4B91] text-white px-6 py-3 rounded-lg hover:opacity-90"
                >
                    Login
                </a>
                <a
                    href="/auth/register"
                    className="bg-[#FFB0AC] text-white px-6 py-3 rounded-lg hover:opacity-90"
                >
                    Join Us
                </a>
            </div>
        </div>
    )
}