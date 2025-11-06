let simulationStarted = false;

export const startThreatSimulation = (sectors, setSectors, addLog) => {
  if (simulationStarted) return;
  simulationStarted = true;

  const scheduleNext = () => {
    const nextInterval = 10000 + Math.floor(Math.random() * 5000); // 10s–15s

    setTimeout(() => {
      // attacks range (1–3)
      const attackCount = Math.random() < 0.5 ? 1 : 2 + Math.floor(Math.random() * 2);
      const attackedIndices = new Set();

      while (attackedIndices.size < attackCount) {
        attackedIndices.add(Math.floor(Math.random() * sectors.length));
      }

      attackedIndices.forEach((targetIndex) => {
        const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(
          Math.random() * 256
        )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;

        addLog(
          "threat",
          `⚠ Intrusion detected in ${sectors[targetIndex].name} (IP: ${randomIP})`
        );

        setSectors((prev) => {
          const updated = [...prev];
          updated[targetIndex].status = "threat";

          setTimeout(() => {
            setSectors((prev2) =>
              prev2.map((s) =>
                s.id === updated[targetIndex].id ? { ...s, status: "secure" } : s
              )
            );
            addLog(
              "secure",
              `✅ ${updated[targetIndex].name} sector secured (IP: ${randomIP} blocked)`
            );
          }, 3000);

          return updated;
        });
      });

      // Schedule the next attack wave
      scheduleNext();
    }, nextInterval);
  };

  scheduleNext();
};
