"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Error({ error, reset }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <p>{error?.message || "An unknown error occurred"}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
