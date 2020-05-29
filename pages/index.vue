<template>
<div>
	<v-container>
		<v-row>
			<v-col cols=12 sm=12 md=3 lg=5 xl=5 >
				<v-card outlined>
					<v-img :aspect-ratio="1/1" src="/img/concept.soccer_1.jpg" alt="top concept image" />
				</v-card>
			</v-col>
			<v-col cols=12 sm=12 md=9 lg=7 xl=7 >
				<v-hover>
					<template  v-slot="{ hover }">
						<v-card :elevation="hover ? 6 : 0">
							<v-card-title class="title font-weight-bold">
								<span>サッカーをITとデータサイエンスでさらに昇華させる</span>
							</v-card-title>
							<v-card-text>
								GitHubをご存知でしょうか。ITの世界では「オープンソース」の概念が普及し、世界中のデベロッパーが世界をよりよくするべく商用、個人利用問わず自由に使える形式で自分たちが開発したプログラムをGitHubのようなサービスで提供し、どんな人でも利用できるようなコミュニティを形成しています。そうした「巨人の肩に乗る」エコシステムにより情報革命は今なお続いています。
							</v-card-text>
							<v-card-text>
								スポーツの世界でそれは成り立たないのでしょうか。自分の考えた戦略を世界中のチームが取り入れたりさらに改良したり、匿名化された個人データで統計的な分析を行い選手にとって、チームにとって最適なポジションを提案したりすることはありえない未来なのでしょうか。
							</v-card-text>
							<v-card-text>
								私が信じたいのはスポーツの世界が、巨大な集合知の力を借り、技術的にも取り巻く経済的にもさらなる発展を遂げ続ける未来です。だからこそこのプラットフォームはなんとしてもローンチしたいものなのです。
							</v-card-text>
							<v-card-actions>
								<v-spacer />
								<v-btn depressed color="cyan darken-4" dark>
									プロジェクトメンバ
								</v-btn>
							</v-card-actions>
						</v-card>
					</template>
				</v-hover>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols=12>
				<div style="margin: 30px auto;">
					<v-img src="/img/logo.spp.alldark.svg" alt="logo" />
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols=12 sm=12 md=6 lg=4 xl=4 v-for="(il, i) in internalLinks" :key="i">
				<v-hover>
					<template  v-slot="{ hover }">
						<v-card style="overflow:hidden;" :elevation="hover ? 6 : 0">
							<div style="text-align:center; margin: 54px auto;">
								<v-icon large color="cyan darken-4">{{il.icon}}</v-icon>
							</div>
							<v-card-title>
								{{il.title}}
							</v-card-title>
							<v-card-subtitle>
								{{il.subtitle}}
							</v-card-subtitle>
							<v-card-text>
								{{il.description}}
							</v-card-text>
							<v-card-actions>
								<v-spacer />
								<v-btn :to="il.to" outlined color="cyan darken-4">ページへ</v-btn>
							</v-card-actions>
						</v-card>
					</template>
				</v-hover>
			</v-col>
		</v-row>
	</v-container>
</div>
</template>

<script>
export default {
	data() {
		return {
			internalLinks: [
				{
					title: 'Concepts of Apps',
					icon: 'mdi-soccer',
					subtitle: 'アプリコンセプト',
					description: 'プラットフォームを構成するアプリ群について紹介します。',
					to: '/concepts',
				},
				{
					icon: 'mdi-account-group',
					title: 'Members',
					subtitle: 'メンバ',
					description: '開発チームメンバの紹介。',
					to: '/members',
				},
				{
					icon: 'mdi-post',
					title: 'Blogs',
					subtitle: 'ブログ',
					description: 'プラットフォームの開発ブログ。',
					to: '/blogs',
				},
			],
		}
	}
}
</script>
