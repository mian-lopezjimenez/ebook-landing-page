<script>
  import { aboutTheAuthorText } from "$data";

  import authorImg from "$assests/profile_pic.jpg";
</script>

<section class="author-section">
  <h2 class="mb-l">About the author</h2>

  <div class="author-container">
    <div class="author-text">
      {@html aboutTheAuthorText}
    </div>
    <img src={authorImg} alt="Author Niklas Fischer" />
  </div>
</section>

<style>
  .author-section {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }

  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }
</style>