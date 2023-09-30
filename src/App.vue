<template>
  <div class="main-page text-center position-relative" ref="content">
    <div class="main-page-inner mx-auto text-start bg-white shadow-lg position-relative">
      <img :src="getImage('pdf.png')"
           alt="Export PDF"
           title="Export PDF"
           class="export-pdf"
           @click="exportPdf"
           v-if="downloadButtonVisible"
      />
      <Intro :introInfo="data.introInfo" :contactInfo="data.contactInfo" :socialMediaInfo="data.socialMediaInfo"/>
      <div class="p-5">
        <Summary :summaryInfo="data.summaryInfo"/>
        <div class="row">
          <div class="col-lg-8">
            <Experience :experinceInfo="data.experinceInfo"/>
          </div>
          <div class="col-lg-4">
            <Education :educationInfo="data.educationInfo"/>
            <Skill :skillInfo="data.skillInfo" :otherSkillInfo="data.otherSkillInfo" :proSkillInfo="data.proSkillInfo"/>
            <!-- <Language :languageInfo="data.languageInfo" /> -->
            <Interest :interestInfo="data.interestInfo"/>
            <Example :examples="data.examples"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <Language :languageInfo="data.languageInfo"/>
          </div>
          <div class="col-lg-8">
            <Volunteer :volunteerInfo="data.volunteerInfo"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import domtoimage from "dom-to-image";

import Intro from '@/components/Intro.vue'
import Summary from '@/components/Summary.vue'
import Profile from '@/components/Profile.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Language from '@/components/Language.vue'
import Interest from '@/components/Interest.vue'
import Example from "@/components/Example";
import Volunteer from '@/components/Volunteer.vue'
import Skill from '@/components/Skill.vue'

import data from './data'

export default {
  components: {
    Example,
    Intro,
    Summary,
    Profile,
    SocialMedia,
    Education,
    Experience,
    Language,
    Interest,
    Skill,
    Volunteer
  },
  data() {
    return {
      data: data,
      downloadButtonVisible: true,
    }
  },
  methods: {
    getImage(name) {
      return require(`./assets/images/${name}`)
    },
    exportPdf() {
      this.downloadButtonVisible = false;
      const width = this.$refs.content.clientWidth;
      const height = this.$refs.content.clientHeight;
      console.log('Best', this.$refs.content);
      domtoimage
          .toPng(this.$refs.content)
          .then(function (dataUrl) {
            const img = new Image();
            img.src = dataUrl;
            console.log({height, width});
            const doc = new jsPDF({
              orientation: "portrait",
              unit: "pt",
              format: [width, height]//2084, 1920
            });
            doc.addImage(img, "JPEG", 0, 3);
            const date = new Date();
            const filename = "CV_FedorVlasenko.pdf";
            doc.save(filename);
          })
          .catch(function (error) {
            console.error("oops, something went wrong!", error);
          })
          .finally(_ => {
            this.downloadButtonVisible = true
          })
    }
  }
}
</script>

<style>
@import './assets/css/font-awesome/css/font-awesome.css';

.export-pdf {
  cursor: pointer;
  width: 64px;
  height: 64px;
  position: absolute;
  right: 20px;
  top: 3em;
}
</style>
