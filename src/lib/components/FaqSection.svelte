<script lang="ts">
  import { FaqItem, Button } from "$components";
  import { faqs } from "$data";
  import type { Faq } from "$interfaces";

  import twitterIcon from "$assests/icons/twitter.webp";

  let expandedFaq: number = $state(-1);

  const onclick = (faqNumber: number) => {
    expandedFaq = expandedFaq === faqNumber ? -1 : faqNumber;
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asked questions</h2>

  <div class="faq-container">
    {#each faqs as faq, index (faq.question)}
      <FaqItem {faq} onclick={() => onclick(index)} isExpanded={expandedFaq === index} />
    {/each}
  </div>

  <div class="additional-info mt-m">
    <Button class="mt-s">buy now</Button>
    <p class="mt-m">Any other questions?</p>
    <a href="/">
      <p>
        Hit me up on twitter  
        <img class="twitter-icon" src={twitterIcon} alt="Twitter icon">
      </p>
    </a>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>