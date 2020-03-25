<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="이름:" label-for="name" description="이름을 입력하세요">
        <b-form-input id="name" v-model="form.name" type="text" required placeholder="Enter Name" />
      </b-form-group>

      <b-form-group id="input-group-2" label="내용:" label-for="title">
        <b-form-textarea id="title" v-model="form.title" required placeholder="Enter title" rows="3" max-rows="6" />
      </b-form-group>

      <b-form-group id="input-group-3" label="첨부파일 여부 :" label-for="fileYN">
        <b-form-select id="fileYN" v-model="form.fileYN" :options="fileYN" required />
      </b-form-group>

      <b-form-group id="input-file-1" label="파일 첨부 :" label-for="file">
        <b-form-file id="file" v-model="file" :state="Boolean(file)" placeholder="Choose a file or drop it here" />
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
      <b-button type="submit" variant="danger">Delete</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
      
    <b-card class="mt-3" header="Form Data">
      <pre class="m-0">name : {{ form.name }}</pre>
      <pre class="m-0">title : {{ form.title }}</pre>
      <pre class="m-0">fileYN : {{ form.fileYN }}</pre>
      <pre class="m-0">fileName : {{ file ? file.name : '' }}</pre>
    </b-card>
    <b-button type="button" variant="info" @click="hideForm()">Hide Form</b-button>
    <b-button type="button" variant="danger" @click="showForm()">Show Form</b-button>
  </div>
</template>

<script>

  export default {
    name: 'Form',
    data() {
      return {
        form: {
          name: '',
          title: '',
          fileYN: '',
        },
        file: null,
        fileYN: [
          {text: 'Yes', value: 'Y'},
          {text: 'No', value: 'N'}
          ],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.name = ''
        this.form.title = ''
        this.form.fileYN = ''
        this.file = null
      },
      hideForm() {
        this.show = false;
      },
      showForm() {
        this.show = true;
      }
    },
  }
</script>