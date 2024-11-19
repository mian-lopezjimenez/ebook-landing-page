<script>
  import { HeroSection, Button } from "$components";

  import { textForPaymentFailure } from "$data";
</script>

<HeroSection>
  <h1>ERROR WHILE</h1>
  <h1 class="mb-l">PURCHASING</h1>
  {@html textForPaymentFailure}
  <Button>try again</Button>
</HeroSection>