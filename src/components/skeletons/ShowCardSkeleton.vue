<template>
  <a class="show-card-container rounded-lg block cursor-pointer">
    <div class="flex items-center justify-center rounded-lg">
      <div class="grid max-w-[370px] bg-black bg-slate-100 flex-col rounded-lg">
        <div class="image-container rounden-lg">
          <img
            src="https://placehold.co/370x320"
            width="375"
            height="200"
            class="rounded-lg justify-center grid h-80 object-cover"
          />
        </div>

        <div class="group p-6 grid z-10 show-detail gap-4">
          <div class="h-6 bg-gray-600 rounded-md w-full mb-4"></div>
          <div class="h-4 bg-gray-600 rounded-md w-full mb-4"></div>
        </div>
      </div>
    </div>
  </a>
</template>
<style scoped>
.show-card-container {
  background: #000;
  position: relative;
}

.image-container {
  background-color: #333;
}
img {
  opacity: 0;
}
.show-detail {
  bottom: 0%;
  background: var(--primary-gray);
  width: 100%;
}
.show-card-container:hover .show-detail {
  display: grid;
}

.show-card-container:hover .show-summary {
  opacity: 0.5;
}

.show-summary {
  position: absolute;
  opacity: 0;
  color: white;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  background: rgba(var(--primary-gray), 0.1);
  transition: opacity 0.3s ease-in;
  padding: 1rem;
}
</style>
