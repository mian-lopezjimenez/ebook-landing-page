<script lang="ts">
	import type { Chapter } from "$interfaces";
  import { chapters } from "$data";

  let selectedChapterNumber: number = $state(1);
  let selectedChapter: Chapter | undefined = $derived(chapters.find(chapter => chapter.number === selectedChapterNumber));

  const selectChapter = (chapterNumber: number) => {
    selectedChapterNumber = chapterNumber
  }
</script>

{#snippet listItem(chapter: Chapter)}
  <li>
    <button 
      aria-controls={`chapter-info-${chapter.number}`}
      aria-expanded={selectedChapterNumber === chapter.number}
      class:selected={selectedChapterNumber === chapter.number} 
      class="chapter-title"
      onclick={() => selectChapter(chapter.number)} 
    >
      <h3>{chapter.title}</h3>
    </button>
  </li>
{/snippet}

<section class="landing-page-section default-margin">
  <h2 class="mb-l">What you're getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter (chapter.number)}
        {@render listItem(chapter)}
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter?.strapline}
      </h3>
      <p>{selectedChapter?.excerpt}</p>
    </div>
  </div>
</section>

<style>
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    display: block;
    padding: 12px;
    text-align: left;
    width: 100%;
  }

  .selected {
    background-color: black;
    border: none;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>