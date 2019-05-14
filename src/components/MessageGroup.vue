<template lang="pug">
	div.message-group
		div.message-heading -- {{ messageDate | moment}} -- 
		div.messages
			message(v-for="message in messageGroup" :message="message" :key="message.ts")
</template>

<script>
	import moment from 'moment'
	import Message from './Message'

	export default {
		name: 'MessageList',
		props: {
			messageDate: String,
			messageGroup: Array
		},
		components: {
			Message
		},
		filters: {
			moment: function (date) {
				return moment(date, "YYYY-MM-DD-ddd").format('ddd, DD MMM YYYY');
			}
		}
	}
</script>


<style scoped lang="sss">
	.message-heading
		margin: 5px
		padding: 5px 0
		color: #343466
		font-weight: bold
</style>
