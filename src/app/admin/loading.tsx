export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 border-4 border-red-600 rounded-full animate-spin border-t-transparent"></div>
        <span className="text-xl font-semibold text-gray-700">Loading...</span>
      </div>
    </div>
  );
}
