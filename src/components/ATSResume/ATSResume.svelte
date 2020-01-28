<script>
  import Note from "../Resume/Note.svelte";
  export let resume = {};
  export let showSummary = false;

  const contactsMap = ["phone", "email", "github", "website", "linkedin"].map(
    contact => resume.contacts.find(object => object.name === contact)
  );
</script>

<style>
  :root {
    --page-width: 8.5in;
    --page-height: 11in;
    --page-margin: 0.7in;
    --slim-margin: 1in;
  }

  :global(p.Note) {
    color: rgb(196, 146, 146);
  }

  @page {
    size: letter portrait;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
    font-weight: lighter;
    font-size: 13px;
  }

  ul {
    margin: 0;
  }

  p {
    margin-top: 0.7em;
  }

  .Resume {
    margin: var(--page-margin) var(--slim-margin);
    display: flex;
    flex-flow: column nowrap;
    max-width: var(--page-width);
    max-height: var(--page-height);
  }

  .Center {
    text-align: center;
  }

  .Name {
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: Bold;
  }

  .Title {
    text-transform: capitalize;
    font-size: 1.2em;
    font-weight: normal;
  }

  .SectionHeader {
    font-size: 1.1em;
    margin-top: 0.5em;
    margin-bottom: 0.2em;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a.Contact::after {
    content: " | ";
  }

  a.Contact:last-child::after {
    content: "";
  }

  .SkillName {
    text-transform: capitalize;
  }

  .SkillItem::after {
    content: " | ";
  }

  .SkillItem:last-child::after {
    content: "";
  }

  .ExperienceItem::after {
    content: ". ";
  }

  .EducationItem::after {
    content: ", ";
  }

  .EducationItem:last-child::after {
    content: "";
  }

  .Bold {
    font-weight: bolder;
  }
</style>

<div class="Resume">
  <!-- start About section -->
  <div class="Name">{resume.name}</div>
  <div class="Title">{resume.title}</div>
  <div>
    {#each contactsMap as contact}
      {#if contact !== undefined}
        <a class="Contact" href={contact.href}>{contact.display}</a>
      {/if}
    {/each}
  </div>
  <!-- end About section -->

  <!-- start Summary section -->
  {#if showSummary}
    <div class>{resume.summary}</div>
  {/if}
  <!-- end Summary section -->

  <!-- start Skills section -->
  <div>
    <div class="Center SectionHeader">Skills</div>
    <ul>
      {#each resume.skills as skill}
        <li>
          <span class="SkillName">{skill.name}:</span>
          {#each skill.list as item}
            <span class="SkillItem">{item}</span>
          {/each}
        </li>
      {/each}
    </ul>
  </div>
  <!-- end Skills section -->

  <!-- start Experience section -->
  <div>
    <div class="Center SectionHeader">Work Experience</div>
    {#each resume.experiences as experience}
      <div>
        <a class="Bold" href={experience.href ? experience.href : null}>
          {experience.place}
        </a>
        - {experience.location}
      </div>
      <div>{experience.title}, {experience.from} - {experience.to}</div>
      <p>
        {#if experience.details}
          {#each experience.details as detail}
            <span class="ExperienceItem">{detail}</span>
          {/each}
        {/if}
      </p>
    {/each}
  </div>
  <!-- end Experience section -->

  <!-- start Education section -->
  <div>
    <div class="Center SectionHeader">Education</div>
    {#each resume.education as item}
      <div>
        <span class="Bold">{item.title},</span>
        {item.to}, {item.place}, {item.place}
      </div>
      {#if item.details}
        {#each item.details as detail}
          <span class="EducationItem">{detail}</span>
        {/each}
      {/if}
    {/each}
  </div>
  <!-- end Education section -->

  <Note {...resume.note} />

</div>
