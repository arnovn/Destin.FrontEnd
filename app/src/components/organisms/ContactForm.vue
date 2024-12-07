<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <FormField id="email" label="Email">
      <BaseInputField
        id="email"
        type="email"
        placeholder="Your email"
        v-model="email"
      />
    </FormField>

    <FormField id="topic" label="Topic">
      <BaseInputField id="topic" placeholder="My topic" v-model="topic" />
    </FormField>

    <FormField id="message" label="Message">
      <BaseTextAreaField
        id="message"
        placeholder="What's on your mind?"
        v-model="message"
      />
    </FormField>

    <FormField id="attachment" label="Attachment">
      <BaseFileInputField
        id="attachment"
        @fileChange="handleFileUpload"
        model-value=""
      />
    </FormField>

    <BaseButton type="submit">Send</BaseButton>
  </form>
</template>

<script>
import BaseInputField from '@/components/atoms/BaseInputField.vue';
import BaseTextAreaField from '@/components/atoms/BaseTextAreaField.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import FormField from '@/components/molecules/FormField.vue';
import BaseFileInputField from '@/components/atoms/BaseFileInputField.vue';

export default {
  name: 'ContactForm',
  components: {
    BaseFileInputField,
    FormField,
    BaseButton,
    BaseTextAreaField,
    BaseInputField,
  },
  data() {
    return {
      email: '',
      topic: '',
      message: '',
      attachment: null,
    };
  },
  methods: {
    handleFileUpload(file) {
      this.attachment = file;
    },
    handleSubmit() {
      console.log('Email:', this.email);
      console.log('Topic:', this.topic);
      console.log('Message:', this.message);
      console.log('Attachment:', this.attachment);
      // Add form submission logic here
    },
  },
};
</script>

<style scoped>
/* Add contact form-specific styles here */
</style>
