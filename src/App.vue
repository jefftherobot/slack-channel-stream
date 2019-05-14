<template lang="pug">
	div#app
		MessageList(v-bind:messages="messages")
</template>

<script>
	import 'normalize.css'
	import axios from 'axios'
	import MessageList from './components/MessageList.vue'

	export default {
		name: 'app',
		components: {
			MessageList
		},
		data () {
			return {
				messages: null
			}
		},
		mounted() {
			axios.get("./messageList.json")
			.then(response => (this.messages = response.data.messages.reverse()))
		}
	}
</script>

<style lang="sss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata')
#app
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	font-family: 'Inconsolata', monospace
	color: #fff
	background: rgba(33,33,33,1.0)

pre
	margin: 0
	font-family: 'Inconsolata', monospace
</style>
