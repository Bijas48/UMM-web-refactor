<script setup>
import { ref } from 'vue'
import ApexCharts from 'vue3-apexcharts'

const series = ref([
  {
    name: 'PT. Usaha Maju Makmur',
    data: [null, null, null, null, null, null, null, 1558.877, 1484.162, 2188.003, 2, 2, 2]
  },
  {
    name: 'PT. Buana Perkasa Sukses',
    data: [null, null, null, null, null, null, null, 249.287, 182.874, 716.382, 2, 2, 2]
  },
  {
    name: 'Merged',
    data: [
      229.654,
      678.097,
      697.434,
      676.406,
      835.09,
      759.064,
      1445.252,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  }
])

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    }
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          formatter: function (value) {
            return value + ' MT'
          },
          enabled: true,
          style: {
            fontSize: '11px',
            fontWeight: 900
          }
        }
      }
    }
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023'
    ]
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + ' MT'
      }
    }
  },
  tooltip: {
    shared: false,
    intersect: false,
    x: {
      formatter: function (val) {
        return new Date(val).getFullYear()
      }
    }
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
})
</script>

<template>
  <section class="my-16">
    <div class="container mx-auto">
      <div>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :variants="{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }"
          :visible="{ opacity: 1, y: 0 }"
          class="my-6 text-center text-2xl font-semibold text-gray-800 md:text-3xl"
        >
          ANNUAL SALES
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :variants="{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }"
          :visible="{ opacity: 1, y: 0 }"
          id="chart"
        >
          <ApexCharts type="bar" height="350" :options="chartOptions" :series="series"></ApexCharts>
        </div>
      </div>
    </div>
  </section>
</template>
