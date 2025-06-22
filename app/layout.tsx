export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-4 border-b pb-2">
        <h1 className="text-2xl font-bold">Gestor de Cumplimiento del RIA</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
