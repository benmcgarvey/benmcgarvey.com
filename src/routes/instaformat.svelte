<script>
  import ContentContainer from "../components/ContentContainer.svelte";

  function convertInput() {
    const inputText = document.querySelector("#input").value;
    const output = inputText.split("\n").join("\u2063\n");
    document.querySelector("#output").value = output;
  }

  function copyToClipboard() {
    /* Get the text field */
    const copyText = document.querySelector("#output");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text!");
  }
</script>

<style>
  .Container {
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
</style>

<svelte:head>
  <title>Ben McGarvey | Instaformatter</title>
  <meta
    name="description"
    content="Format your instagram captions. Add linebreaks easily!" />
</svelte:head>
<ContentContainer>
  <div class="Container">
    <textarea name="input" id="input" cols="30" rows="10" />
    <button on:click={convertInput}>convert</button>
    <textarea readonly name="output" id="output" cols="30" rows="10" />
    <button on:click={copyToClipboard}>copy to clipboard</button>
  </div>
</ContentContainer>
