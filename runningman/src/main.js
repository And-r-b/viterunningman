import { debounce } from 'lodash';
import { format } from 'date-fns';

console.log("Runner is alive and sprinting!");

document.addEventListener("DOMContentLoaded", function () {
  const runButton = document.getElementById("runBtn");
  const runner = document.querySelector('.runner');
  const creature = document.querySelector('.creature');
  const lastRunTime = document.getElementById('lastRunTime');

  // Debounced version of the run logic
  const triggerRun = debounce(() => {
    // Reset animation
    runner.style.animation = 'none';
    creature.style.animation = 'none';

    void runner.offsetWidth;
    void creature.offsetWidth;

    // Apply fast animation
    runner.style.animation = 'runAcrossFast 3s linear';
    creature.style.animation = 'creatureChaseFast 3s linear';
    creature.style.animationDelay = '0.3s';

    // Update the timestamp
    const now = new Date();
    const formattedTime = format(now, 'HH:mm:ss');
    lastRunTime.textContent = `Last sprint: ${formattedTime}`;

    // After the fast run ends, return to default loop
    runner.addEventListener('animationend', function () {
      runner.style.animation = 'runAcross 6s linear infinite';
      creature.style.animation = 'creatureChase 6s linear infinite';
      creature.style.animationDelay = '0.5s';
    }, { once: true });

  }, 1000); // 1s debounce

  runButton.addEventListener("click", triggerRun);
});
