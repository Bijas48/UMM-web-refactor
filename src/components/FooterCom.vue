<script setup></script>

<template>
  <div class="bg-black pt-8">
    <div class="container mx-auto" v-motion-slide-visible-bottom>
      <div class="flex flex-wrap">
        <div class="w-full p-4 md:w-1/3">
          <div class="widget">
            <h5 class="font-alt text-xl text-white">About UMM</h5>
            <p class="text-gray-300">
              <em>
                PT. Usaha Maju Makmur is a coal trading company based in Jakarta. Initially, this
                company was established in June 2010. As a growing company, we have established
                partnerships with a number of qualified mining companies, particularly within South
                Sumatera, Jambi, South Kalimantan, East Kalimantan, and Bengkulu, Indonesia.
              </em>
            </p>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/3">
          <!-- You can add content here if needed -->
        </div>
        <div class="w-full p-4 md:w-1/3">
          <div class="widget">
            <h5 class="font-alt text-xl text-white">Contact Us</h5>
            <p class="text-gray-300">
              <b>PT Usaha Maju Makmur</b><br />
              Perwata Tower - CBD Pluit 10<sup>th</sup> Floor Suite C<br />
              Pluit Selatan Raya Street Kav. 1 North Jakarta 14440, Indonesia<br />
              Phone: 021 - 30433699/88<br />
              Email:
              <a href="mailto:info@ummcoalindo.com" class="text-gray-400 hover:underline"
                >info@ummcoalindo.com</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4 border-gray-700" />
    <footer class="bg-black" v-motion-slide-visible-bottom>
      <div class="container mx-auto">
        <div class="flex items-center justify-center px-5 py-4 md:justify-between">
          <div>
            <p class="text-gray-300">
              &copy; 2024&nbsp;<a href="/" class="text-gray-400 hover:underline">UMM</a>, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
