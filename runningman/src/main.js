

// Running Man with his best friend.

console.log("Runner is alive and sprinting!");
// When the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  const runButton = document.getElementById("runBtn");
  const runner = document.querySelector('.runner');
  const creature = document.querySelector('.creature');

  // Function to start/trigger the run animation with a fast speed
  runButton.addEventListener("click", function () {
    // Reset the animation to trigger a faster run
    runner.style.animation = 'none';
    creature.style.animation = 'none'; // Reset the creature's animation as well

    // Trigger a reflow so the browser notices the change
    void runner.offsetWidth;
    void creature.offsetWidth;

    // Apply the fast 3-second animation to the runner and creature
    runner.style.animation = 'runAcrossFast 3s linear'; // Run faster for 3 seconds
    creature.style.animation = 'creatureChaseFast 3s linear'; // Creature runs faster too
    creature.style.animationDelay = '0.3s'; // No delay for the creature

    // After the fast animation ends, reset back to the original 6s run for both
    runner.addEventListener('animationend', function () {
      runner.style.animation = 'runAcross 6s linear infinite'; // Reset runner speed to default
      creature.style.animation = 'creatureChase 6s linear infinite'; // Reset creature speed to default
      creature.style.animationDelay = '0.5s'; // Reset creature's animation delay
    }, { once: true }); // Ensure this event only triggers once per fast run
  });
});
