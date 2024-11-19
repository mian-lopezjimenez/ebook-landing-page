<script>
  import { HeroSection } from "$components";

  import { textForPaymentSuccess } from "$data";
</script>

<HeroSection>
  <h1>THANK YOU FOR</h1>
  <h1 class="mb-l">PURCHASING</h1>
  {@html textForPaymentSuccess}
</HeroSection>