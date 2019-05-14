<template lang="pug">
	div.message-list
		messageGroup(v-for="(messageGroup, messageDate) in groupMessagesByDay" :messageGroup="messageGroup" :messageDate="messageDate")
</template>

<script>
	import _ from 'lodash'
	import moment from 'moment'
	import MessageGroup from './MessageGroup'

	export default {
		name: 'MessageList',
		props: {
			messages: Array
		},
		components: {
			MessageGroup
		},
		mounted() {
		},
		computed: {
			groupMessagesByDay() {

				const sortByKeys = object => {
					const keys = Object.keys(object);
					const sortedKeys = _.sortBy(keys)

					return _.fromPairs(
						_.map(sortedKeys, key => [key, object[key]])
					)
				}

				return sortByKeys(_.groupBy(this.messages, (message) => moment.unix(message['ts']).startOf('day').format('YYYY-MM-DD-ddd')))
			}
		}
	}
</script>


<style scoped lang="sss">
	.message-list
		padding: 5px
</style>
