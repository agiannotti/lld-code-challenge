<template>
  <div
    class="
      container
      m-auto
      min-h-screen
      flex
      justify-center
      text-center
      align-center
    "
  >
    <div>
      <Logo />
      <h1 class="title">Limelight Dev Code Challenge</h1>
      <div class="links">
        <a target="_blank" rel="noopener noreferrer" class="button--green">
          <NuxtLink to="/data">Products</NuxtLink>
        </a>
        <a
          href="https://github.com/agiannotti/lld-code-challenge.git"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Git
        </a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
