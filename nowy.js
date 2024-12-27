document.getElementById('myfile').addEventListener('change', function() {
  var GetFile = new FileReader();
  let fetchController;
  
  GetFile.onload = function() {
    var Zosia = GetFile.result.split('.');
    let anna = document.getElementById("msg").value;
    let basia = document.getElementById("msg2").value;
    let i = parseInt(anna, 10);

    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
      for (; i < Zosia.length; i++) {
        if (fetchController && fetchController.signal.aborted) {
          break;
        }
        document.getElementById('output').innerHTML = Zosia[i];
        document.getElementById('output2').innerHTML = `(${i}/${Zosia.length} = ${(i / Zosia.length * 100).toFixed(2)} % )`;
        let rafal = Zosia[i].length / 20;
        await timer(basia * 1000 * rafal); // then the created Promise can be awaited
      }
    }

    fetchController = new AbortController();
    load();

    document.getElementById('stopButton').addEventListener('click', () => {
      if (fetchController) {
        fetchController.abort();
        document.getElementById('stopButton').disabled = true;
        document.getElementById('resumeButton').disabled = false;
      }
    });

    document.getElementById('resumeButton').addEventListener('click', () => {
      fetchController = new AbortController();
      load();
      document.getElementById('stopButton').disabled = false;
      document.getElementById('resumeButton').disabled = true;
    });
  }

  GetFile.readAsText(this.files[0]);
});
