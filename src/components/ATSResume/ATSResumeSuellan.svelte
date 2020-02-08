<script>
  import Note from "../Resume/Note.svelte";
  export let resume = {};
  export let showSummary = false;

  const contactsMap = ["address", "Phone (US)", "email", "linkedin"].map(
    contact => resume.contacts.find(object => object.name === contact)
  );
</script>

<style>
  :global(p.Note) {
    color: rgb(196, 146, 146);
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
    font-weight: lighter;
    font-size: 12px;
  }

  .Note {
    margin-top: 15px;
  }

  p {
    margin-top: 0.7em;
  }

  ul {
    padding-inline-start: 17px;
  }

  .Resume {
    margin: var(--page-margin) var(--slim-margin);
    display: flex;
    flex-flow: column nowrap;
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

  .SkillItem::after {
    content: " ";
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

  .Italic {
    font-style: italic;
  }

  .Reference {
    margin-bottom: 10px;
  }
  @media print {
    @page {
    }

    .Resume {
      size: letter portrait;
      margin: 2%;
    }
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
    {#each resume.skills.filter(skill => skill.name !== 'Key Projects') as skill}
      <div class="Center SectionHeader">{skill.name}</div>
      {#each skill.list as item}
        <span class="SkillItem">{item}</span>
      {/each}
    {/each}
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
    {#each resume.skills.filter(skill => skill.name === 'Key Projects') as skill}
      <div class="Center SectionHeader">{skill.name}</div>
      <ul>

        {#each skill.list as item}
          <li>
            <span class="SkillItem">{item}</span>
          </li>
        {/each}
      </ul>
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

  <!-- start References section -->
  <div>
    <div class="Center SectionHeader">References</div>
    {#each resume.references as item}
      <div class="Reference">
        <div class="Bold">{item.name}</div>
        <div class="Italic">{item.position}</div>
        <div>Relationship: {item.relationship}</div>
        <div>Mobile: {item.mobile}</div>
        <div>Email: {item.email}</div>
        <div>Linkedin: {item.linkedin}</div>
      </div>
    {/each}
  </div>
  <!-- end References section -->

  <div class="Note">
    <Note {...resume.note} />
  </div>

</div>
