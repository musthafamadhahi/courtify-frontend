import Link from 'next/link';

export default function Test() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Test Page</h1>
      <Link href="/" className="text-blue-600 underline">
        Back to Home
      </Link>
    </main>
  );
}
