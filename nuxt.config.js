import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import { readFileSync } from 'fs'
require('dotenv').config()
const fs = require('fs')

export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	env: {

	},
	sitemap: {
		path: '/sitemap.xml',
		hostname: 'https://socker-platform-project.netlify.com',
	},
	generate: {
		dir: 'docs',
		subFolders: false,
	},
	head: {
		htmlAttrs: {
			lang: 'ja'
		},
		titleTemplate: '%s - Soccer Platform Project',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			},
			{ httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
			{ hid: 'twitter:site', name: 'twitter:site', content: '@1101hiroki_n'},
			{ hid: 'og:site_name', property: 'og:site_name', content: 'Hiroki Nakatani'},
			{ hid: 'og:locale', property: 'og:locale', content: 'ja_JP'},
			{ hid: 'fb:app_id', property: 'fb:app_id', content: ''},

			{ hid: 'msapplication-square70x70logo', name: 'msapplication-square70x70logo', content: '/img/favicons/site-tile-70x70.png'},
			{ hid: 'msapplication-square150x150logo', name: 'msapplication-square150x150logo', content: '/img/favicons/site-tile-70x70.png'},
			{ hid: 'msapplication-wide310x150logo', name: 'msapplication-wide310x150logo', content: '/img/favicons//site-tile-310x150.png'},
			{ hid: 'msapplication-square310x310logo', name: 'msapplication-square310x310logo', content: '/img/favicons/site-tile-310x310.png'},
			{ hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff'},
		],
		link: [

			{ rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/img/favicons/favicon.ico', },
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/img/favicons/apple-touch-icon-57x57.png',},
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/img/favicons/apple-touch-icon-60x60.png',},
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/img/favicons/apple-touch-icon-72x72.png',},
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/img/favicons/apple-touch-icon-76x76.png',},
			{ rel: 'apple-touch-icon', sizes: '114x114', href: '/img/favicons/apple-touch-icon-114x114.png',},
			{ rel: 'apple-touch-icon', sizes: '120x120', href: '/img/favicons/apple-touch-icon-120x120.png',},
			{ rel: 'apple-touch-icon', sizes: '144x144', href: '/img/favicons/apple-touch-icon-144x144.png',},
			{ rel: 'apple-touch-icon', sizes: '152x152', href: '/img/favicons/apple-touch-icon-152x152.png',},
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-touch-icon-180x180.png',},
			{ rel: 'icon', sizes: '36x36', href: '/img/favicons/android-chrome-36x36.png', type: 'image/png',},
			{ rel: 'icon', sizes: '48x48', href: '/img/favicons/android-chrome-48x48.png', type: 'image/png',},
			{ rel: 'icon', sizes: '72x72', href: '/img/favicons/android-chrome-72x72.png', type: 'image/png',},
			{ rel: 'icon', sizes: '96x96', href: '/img/favicons/android-chrome-96x96.png', type: 'image/png',},
			{ rel: 'icon', sizes: '128x128', href: '/img/favicons/android-chrome-128x128.png', type: 'image/png',},
			{ rel: 'icon', sizes: '144x144', href: '/img/favicons/android-chrome-144x144.png', type: 'image/png',},
			{ rel: 'icon', sizes: '152x152', href: '/img/favicons/android-chrome-152x152.png', type: 'image/png',},
			{ rel: 'icon', sizes: '192x192', href: '/img/favicons/android-chrome-192x192.png', type: 'image/png',},
			{ rel: 'icon', sizes: '256x256', href: '/img/favicons/android-chrome-256x256.png', type: 'image/png',},
			{ rel: 'icon', sizes: '384x384', href: '/img/favicons/android-chrome-384x384.png', type: 'image/png',},
			{ rel: 'icon', sizes: '512x512', href: '/img/favicons/android-chrome-512x512.png', type: 'image/png',},
			{ rel: 'icon', sizes: '36x36', href: '/img/favicons/icon-36x36.png', type: 'image/png',},
			{ rel: 'icon', sizes: '48x48', href: '/img/favicons/icon-48x48.png', type: 'image/png',},
			{ rel: 'icon', sizes: '72x72', href: '/img/favicons/icon-72x72.png', type: 'image/png',},
			{ rel: 'icon', sizes: '96x96', href: '/img/favicons/icon-96x96.png', type: 'image/png',},
			{ rel: 'icon', sizes: '128x128', href: '/img/favicons/icon-128x128.png', type: 'image/png',},
			{ rel: 'icon', sizes: '144x144', href: '/img/favicons/icon-144x144.png', type: 'image/png',},
			{ rel: 'icon', sizes: '152x152', href: '/img/favicons/icon-152x152.png', type: 'image/png',},
			{ rel: 'icon', sizes: '160x160', href: '/img/favicons/icon-160x160.png', type: 'image/png',},
			{ rel: 'icon', sizes: '192x192', href: '/img/favicons/icon-192x192.png', type: 'image/png',},
			{ rel: 'icon', sizes: '196x196', href: '/img/favicons/icon-196x196.png', type: 'image/png',},
			{ rel: 'icon', sizes: '384x384', href: '/img/favicons/icon-384x384.png', type: 'image/png',},
			{ rel: 'icon', sizes: '512x512', href: '/img/favicons/icon-512x512.png', type: 'image/png',},
			{ rel: 'icon', sizes: '16x16', href: '/img/favicons/icon-16x16.png', type: 'image/png',},
			{ rel: 'icon', sizes: '24x24', href: '/img/favicons/icon-24x24.png', type: 'image/png',},
			{ rel: 'icon', sizes: '32x32', href: '/img/favicons/icon-32x32.png', type: 'image/png',},
		],
	},
	
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{src: '~/plugins/router.scrollBehavior.js', ssr: false,}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/vuetify',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'@nuxtjs/sitemap',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
		baseURL: process.env.BASE_URL || 'http://localhost:3000'
	},
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
