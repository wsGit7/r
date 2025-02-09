document.getElementById('myfile').addEventListener('change', function() {
  var GetFile = new FileReader();
  let isPaused = false;
  let currentIndex = 0;

  GetFile.onload = function() {
    var Zosia = GetFile.result.split('.');
    let anna = document.getElementById("msg").value;
    let basia = document.getElementById("msg2").value;
    currentIndex = parseInt(anna, 10);

    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
      while (currentIndex < Zosia.length) {
        if (isPaused) {
          await timer(100);
          continue;
        }
        document.getElementById('output').innerHTML = Zosia[currentIndex];
        document.getElementById('output2').innerHTML = `(${currentIndex}/${Zosia.length} = ${(currentIndex / Zosia.length * 100).toFixed(2)} % )`;
        let rafal = Zosia[currentIndex].length / 20;
        await timer(basia * 1000 * rafal);
        currentIndex++;
      }
    }

    document.getElementById('stopButton').addEventListener('click', () => {
      isPaused = true;
      document.getElementById('stopButton').disabled = true;
      document.getElementById('resumeButton').disabled = false;
    });

    document.getElementById('resumeButton').addEventListener('click', () => {
      isPaused = false;
      document.getElementById('stopButton').disabled = false;
      document.getElementById('resumeButton').disabled = true;
    });

    load();
  }

  GetFile.readAsText(this.files[0]);
});
