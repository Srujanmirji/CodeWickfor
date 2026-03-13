import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SubmitIdea() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Submit Idea</h1>
          <p className="text-gray-400">This is a placeholder for the submit idea page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
