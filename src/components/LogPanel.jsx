export default function LogPanel({ logs }) {
  return (
    <div className="w-[80%] h-[30%] bg-black/70 rounded-xl border border-krprRed mt-4 p-3 overflow-y-auto text-xs">
      <h2 className="text-krprRed mb-2 font-bold">System Logs</h2>
      {logs.length === 0 && <p className="text-gray-500">No recent activity.</p>}
      {logs.map((log, i) => (
        <p key={i} className={`${log.type === "threat" ? "text-krprRed" : "text-krprWhite"}`}>
          [{log.time}] {log.message}
        </p>
      ))}
    </div>
  );
}
