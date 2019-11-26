<script>
  export let contacts;

  const lookup = name => contacts.find(contact => contact.name === name);
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
      <a href={lookup('website').href}>{lookup('website').display}</a>
    </li>
    <li>
      <a href={lookup('github').href}>{lookup('github').display}</a>
    </li>
    <li>
      <a href={lookup('email').href}>{lookup('email').display}</a>
    </li>
    <li>
      <a href={lookup('linkedin').href}>{lookup('linkedin').display}</a>
    </li>
    <li>
      <a href={lookup('phone').href}>{lookup('phone').display}</a>
    </li>
  </ul>
</div>
