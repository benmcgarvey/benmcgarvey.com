<script>
  import ContentContainer from "../components/ContentContainer.svelte";
  import { onMount } from "svelte";
  import { storage } from "./localStore.js";

  let inputHeight;
  let inputContainer;

  let maybeStorage = "";

  $: valid = false;

  function getInnerHeight(elm) {
    var computed = getComputedStyle(elm),
      padding =
        parseInt(computed.paddingTop) + parseInt(computed.paddingBottom);

    return elm.clientHeight - padding;
  }

  onMount(async () => {
    storage.useLocalStorage();
    maybeStorage = $storage.template || null;
    valid = $storage.template || false;

    inputContainer = document.querySelector(".Input");
    inputHeight = getInnerHeight(inputContainer);
    inputContainer.style.height = `${inputHeight}px`;
  });

  function invalidateForm() {
    console.log(valid);
    valid = false;
  }

  const convertInput = inputText => inputText.split("\n").join("\u2063\n");

  const copyToClipboard = toCopy => {
    /* Select the text field */
    toCopy.select();
    toCopy.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Successfully converted and automatically copied to your clipboard!");

    toCopy.blur();
  };

  function convertAndCopy() {
    const inputTextArea = document.querySelector(".Input");
    const inputText = inputTextArea.value;
    inputTextArea.value = convertInput(inputText);
    copyToClipboard(inputTextArea);
    valid = true;
  }

  function saveAsTemplate() {
    if (!valid) {
      alert("Your post isn't formatted, make sure to convert before saving!");
      return;
    }

    const newValue = document.querySelector(".Input").value;

    if ($storage.template === newValue) {
      alert(
        "This is the same as your current template, try making changes before saving."
      );
      return;
    }

    const override = $storage.template
      ? confirm(
          "You're about to override an existing template, are you sure you want to proceed?"
        )
      : true;

    if (!override) {
      alert("Your template has has not been saved.");
      return;
    }

    $storage["template"] = newValue;
    alert(
      "Your template has been saved. It will prepopulate next time you visit this page on this device."
    );
  }

  function clearTemplate() {
    const confirmed = confirm(
      "You're about to delete your saved template are you sure you want to proceed?"
    );

    if (confirmed) {
      $storage = {};
      const inputTextArea = document.querySelector(".Input");
      alert("Your saved template has been deleted.");
    } else {
      alert("Your saved template has not been deleted.");
    }
  }
</script>

<style>
  .Formatter {
    height: 100%;
    padding: 15px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .TextArea {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    margin-bottom: 15px;
  }

  .Input {
    width: -webkit-fill-available;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: none;
    border-radius: 10px;
    color: #333;
    background-color: #aacfdd65;
    resize: none;
  }

  .ButtonBar {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  .Input:focus,
  button:focus {
    outline: none;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 2em;
    text-transform: uppercase;
  }

  button:hover {
    position: relative;
    top: 1px;
    cursor: pointer;
  }

  .Convert {
    color: white;
    background-color: #91d394ad;
  }

  .UtilityBar {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    font-size: 0.5em;
  }

  @media (max-width: 666px) {
    .UtilityBar {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      font-size: 0.5em;
    }
  }

  .Save {
    font-size: 4em;
    color: #333;
    padding-bottom: 0;
    padding-left: 0px;
    padding-right: 0px;
    background-color: transparent;
  }

  .Clear {
    color: rgb(172, 57, 57);
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
  }
</style>

<svelte:head>
  <title>Ben McGarvey | Instaformatter</title>
  <meta
    name="description"
    content="Format your instagram captions. Add linebreaks easily!" />
</svelte:head>
<ContentContainer>
  <div class="Formatter">
    <div class="TextArea">
      <textarea
        value={maybeStorage}
        on:input={invalidateForm}
        placeholder="Write your post here..."
        class="Input" />
    </div>

    <div class="ButtonBar">
      <button class="Convert" on:click={convertAndCopy}>convert & copy</button>
      <div class="UtilityBar">
        <button class="Save" on:click={saveAsTemplate}>save as template</button>
        <button class="Clear" on:click={clearTemplate}>delete template</button>
      </div>

    </div>
  </div>
</ContentContainer>
