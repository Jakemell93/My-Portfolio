<template>
  <section
    class="relative isolate flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 py-24 text-center text-white">
    <!-- Decorative blurred blob -->
    <div
      class="pointer-events-none absolute -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-400 opacity-30 blur-3xl"
      style="top: 60%; left: 50%" />

    <h1 class="max-w-3xl px-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
      Hi, I’m Jake — a&nbsp;<span class="underline decoration-4 decoration-white/60">Vue&nbsp;developer</span>
      who designs with code.
    </h1>

    <p class="mt-6 max-w-xl px-6 text-lg md:text-xl">
      Cooking up performant front-ends, from pub kitchens to production&nbsp;servers.
    </p>

    <div class="mt-10 flex gap-4">
      <RouterLink to="/projects"
        class="rounded-xl bg-white/90 px-6 py-3 text-indigo-700 font-semibold shadow hover:bg-white transition">
        See my work →
      </RouterLink>

      <a href="mailto:you@example.com"
        class="rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition">
        Hire me
      </a>
    </div>
  </section>
</template>


<script>
export default {
  name: 'HeroSection',
}
</script>