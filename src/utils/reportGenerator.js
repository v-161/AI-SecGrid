export function generateReport(logs) {
if (!logs.length) return alert("No logs to generate report.");

const content = logs
.map((log) => `[${log.date} ${log.time}] ${log.message}`)
.join("\n");

const blob = new Blob([content], { type: "text/plain" });
const link = document.createElement("a");
link.download = `Threat_Report_${Date.now()}.txt`;
link.href = URL.createObjectURL(blob);
link.click();
}
