<script lang="ts">
	import { goto } from "$app/navigation";
  
  import { loadStripe } from "@stripe/stripe-js";
  
  import { PUBLIC_STRIPE_KEY } from "$env/static/public";

  interface SessionData {
    sessionId: string
  }

  let { children, ...props } = $props();

  const onclick = async () => {
    try {
      const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      })

      const { sessionId }: SessionData = await response.json();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      goto("/cancel");
    }
  }
</script>

<button {onclick} {...props}>
  {@render children()}
</button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>