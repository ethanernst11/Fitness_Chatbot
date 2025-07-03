import Chat from './Chat';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg flex flex-col h-[80vh]">
        <div className="p-4 border-b text-xl font-semibold">🏋️ Fitness Chatbot</div>
        <Chat />
      </div>
    </main>
  );
}