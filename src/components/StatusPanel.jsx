export default function StatusPanel({ sector }) {
  if (!sector) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-krprGray text-krprWhite p-4 rounded-xl shadow-lg border border-krprRed">
      <h2 className="text-xl font-bold">{sector.name}</h2>
      <p>Status: <span className={sector.status === "threat" ? "text-krprRed" : "text-krprWhite"}>
        {sector.status === "threat" ? "Under Threat" : "Secure"}
      </span></p>
    </div>
  );
}
