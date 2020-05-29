<template>
	<v-app>
		<v-app-bar
			fixed
			app
			elevation="2"
			dark
		>	
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-items style="color: #000000;">
				<div style="margin-left:8px; display:flex; align-content:center; align-items:center; justify-content:center" >
					<img height="18" style="margin: 0;" src="/img/header.logo.spp.white.svg" />
				</div>
			</v-toolbar-items>
			<v-spacer />
			<!--
			<template v-slot:extension>
				<v-tabs
					right
					slider-color="#3d73e0"
				>
					<v-tab exact v-for="(il, i) in internalLinks" :key="'tabs-'+i" :to="il.to">{{il.title}}</v-tab>
				</v-tabs>
			</template>
			-->
		</v-app-bar>

		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>

		<v-navigation-drawer
			v-model="drawer"
			fixed
			app
			dark
			temporary
			color="#1a1a1a"
		>	
			<v-list>
				<v-list-item>
					<div class="text-center" style="max-width: 60%; margin: 24px auto;">
						<v-img eager src="/img/logo.drawer.spp.white.svg" alt="header logo image" />
					</div>
				</v-list-item>
			</v-list>
			<v-divider />
			<v-list >
				<v-list-item
					v-for="(il, i) in internalLinks"
					:key="i"
					:to="il.to"
					exact
				>
					<v-list-item-action style="margin:auto;">
						<v-icon small>{{ il.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="il.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-divider />
			<v-list >
				<v-list-item
					v-for="(xl, j) in externalLinks"
					:key="j"
					:href="xl.href"
					target="_branc"
				>
					<v-list-item-action style="margin:auto;">
						<v-icon small>{{ xl.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{xl.title}} <v-icon x-small color="grey darken-1">mdi-open-in-new</v-icon></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<div style="padding-bottom:120px;"></div>
		</v-navigation-drawer>
		
		<v-footer
			app
			absolute
		>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
// import '@/assets/icomoon/style.css'
export default {
	data () {
		return {
			drawer: false,
			internalLinks: [
				{
					icon: 'mdi-home',
					title: 'トップ',
					to: '/',
				},
				{
					icon: 'mdi-soccer',
					title: 'コンセプト',
					to: '/concepts',
				},
				{
					icon: 'mdi-account-group',
					title: 'メンバ',
					to: '/members',
				},
				{
					icon: 'mdi-post',
					title: 'ブログ',
					to: '/blogs',
				},
			],
			externalLinks: [
				{
					icon: 'mdi-twitter',
					title: 'Twitter',
					href: 'https://twitter.com/1101hiroki_n',
					color: '#1DA1F2',
					text: '',
				},
				{
					icon: 'mdi-facebook',
					title: 'Facebook',
					href: 'https://facebook.com/hiroki.nakatani.75',
					color: '#0078FF',
					text: '',
				},
				{
					icon: 'mdi-instagram',
					title: 'Instagram',
					href: 'https://instagram.com/1101hiroki_n',
					color: '#E1306C',
					text: '',
				},
			],
			right: true,
			title: 'Soccer Platform Project'
		}
	}
}
</script>