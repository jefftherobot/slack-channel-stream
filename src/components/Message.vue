<template lang="pug">
	div.message
		div.ts [{{ message.ts | moment }}]
		div.user <{{ message.user || message.username }}>
		div.content
			div {{ message.text }} 
			div.attachments(v-if="message.attachments") 
				div.fallback(v-if="message.attachments[0].fallback" :style="{ color: '#'+message.attachments[0].color}" ) 
					| {{ message.attachments[0].fallback }}
				pre.text(v-if="message.attachments[0].text") {{ message.attachments[0].text }}
				div.image-caption(v-if="message.attachments[0].footer") ~~> {{ message.attachments[0].footer }}
					span(v-if="message.attachments[0].image_bytes")  ({{ message.attachments[0].image_bytes | kilobytes}} kB)
				div.image(v-if="message.attachments[0].image_url")
					a(:href="message.attachments[0].image_url")
						img(:src="message.attachments[0].image_url")
				

</template>

<script>
	import moment from 'moment'
	export default {
		name: 'Message',
		props: {
			message: Object
		},
		filters: {
			moment: function (date) {
				return moment.unix(date).format('HH:mm:ss');
			},
			kilobytes: function(bytes) {
				return bytes/1000
			}
		}
	}
</script>


<style scoped lang="sss">

.message
	display: flex
	padding: 0

.ts
	min-width: 100px
	color: #676876

.user
	margin: 0 10px 0 0
	padding: 0 10px 0 0
	min-width: 100px
	text-align: right
	color: #378675
	border-right: 1px solid rgba(255,255,255,.2)

.content
	margin: 0 0 15px

.image
	//display: none
	margin: 10px 0 0
	max-width: 350px
	& img 
		width: 100%

.image-caption
	opacity: .4




</style>
