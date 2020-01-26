<style>
  .Hero h1 {
    margin-bottom: 0.4em;
    font-size: 35px;
    font-style: italic;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -0.2px;
  }
  .Hero h4 {
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.2px;
  }
  .Hero p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 40px;
  }
  .Hero a.Link {
    color: #47b881;
    border-bottom: 2px solid rgba(71, 184, 129, 0.05);
  }
  .Hero a.Link:hover {
    border-bottom-color: #47b881;
  }
  .Hero a.Link:active {
    color: #40a674;
    border-bottom-color: #40a674;
  }
  .Hero-inner {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 80px 24px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .Hero-left,
  .Hero-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .Hero-right {
    padding-left: 48px;
    display: flex;
  }
  .Hero-right img {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
  }
</style>

<svelte:head>
  <title>Narawittriprom Github Pages</title>
</svelte:head>

<section class="Hero">
  <div class="Hero-inner">
    <div class="Hero-left">
      <h4>Siberian Husky said</h4>
      <h1>"Creatures is friend but furniture foe."</h1>
      <p>
        husky is a medium-sized working dog breed. The breed belongs to the
        Spitz genetic family. It is recognizable by its thickly furred double
        coat, erect triangular ears, and distinctive markings, and is smaller
        than a very similar-looking dog, the Alaskan Malamute.
        <br />
        <a
          class="Link"
          href="https://en.wikipedia.org/wiki/Siberian_Husky"
          target="_blank">
          For more information.
        </a>
      </p>

    </div>
    <div class="Hero-right">
      <img src="husky_quote.jpg" class="big-picture" alt="doggo" />
    </div>
  </div>
</section>
