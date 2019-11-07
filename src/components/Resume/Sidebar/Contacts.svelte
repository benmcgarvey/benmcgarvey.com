<script>
  export let website;
  export let github;
  export let email;
  export let linkedin;
</script>

<style>
  h1 {
    font-weight: 400;
    font-size: 11pt;
    margin: 0;
    text-transform: uppercase;
  }

  ul {
    margin-top: 0.05in;
    padding-left: 0;
    font-weight: 400;
    line-height: 1.75;
  }

  li {
    list-style-type: none;
  }

  a {
    padding-left: 2px;
    text-decoration: none;
    color: #000;
  }
</style>

<div>
  <h1>Contact Info</h1>
  <ul>
    <li>
      <i class="icon-earth" />
      <a href="https://{website}">{website}</a>
    </li>
    <li>
      <i class="icon-github" />
      <a href="https://{github}">{github}</a>
    </li>
    <li>
      <i class="icon-mail4" />
      <a href="mailto:{email}">{email}</a>
    </li>
    <li>
      <i class="icon-linkedin2" />
      <a href="https://{linkedin}">{linkedin}</a>
    </li>
  </ul>
</div>
