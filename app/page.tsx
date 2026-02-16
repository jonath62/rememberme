import { RememberMeButton } from "./components/RememberMeButton";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Remember Me
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Never forget a special moment again. Create beautiful, lasting memories and share them with your loved ones.
        </p>
        <RememberMeButton />
      </div>
    </main>
  );
}
