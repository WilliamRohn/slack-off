<template>
	<div class="AboutView">
		<el-menu :default-active="activeMenu" class="el-menu-demo" mode="horizontal" @select="handleSelect()"
			background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item v-for="(father, index) in data" :key="father.id" :index="father.name + ',' + index">
				<a-icon :type="father.icon" /><span>{{ father.name }}</span>
			</el-menu-item>
		</el-menu>
		<!-- 左侧菜单List -->
		<el-menu v-if="activeMenuIndex != ''" :default-active="activeSubMenu" class="el-menu-vertical-demo Left_menu" @open="handleOpen"
			@close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<!-- 滚动条 -->
			<el-scrollbar style="height: 100%">
				<template v-for="son in data[activeMenuIndex].children">
					<!-- 如果二级菜单有children, 就是三级菜单 -->
					<template v-if="son.children">
						<el-submenu :index="son.name" :key="son.id">
							<!-- 三级菜单Name -->
							<template slot="title">
								<a-icon :type="son.icon" /><span>{{ son.name }}</span>
							</template>
							<!-- 三级菜单List -->
							<el-menu-item v-for="grandson in son.children" :key="grandson.id" :index="grandson.name">
								<span>{{ grandson.name }}</span>
							</el-menu-item>
						</el-submenu>
					</template>
					<!-- 否则就是二级菜单 -->
					<template v-else>
						<el-menu-item :index="son.name" :key="son.id">
							<template slot="title">
								<a-icon :type="son.icon" /><span>{{ son.name }}</span>
							</template>
						</el-menu-item>
					</template>
				</template>
			</el-scrollbar>
		</el-menu>
		<router-view />
		<!-- <el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="Com_1" name="Com_1"></el-tab-pane>
			<el-tab-pane label="Com_2" name="Com_2"></el-tab-pane>
		</el-tabs>
		<Transition>
			<KeepAlive>
				<Com_1 v-if="activeName=='Com_1'"></Com_1>
				<Com_2 v-if="activeName=='Com_2'"></Com_2>
			</KeepAlive>
		</Transition> -->
	</div>
</template>

<script>
import Com_1 from "./component/com_1.vue";
import Com_2 from "./component/com_2.vue";
import { arr } from "../AboutView/contact";

export default {
	data() {
		return {
			activeMenu: '',
			activeMenuIndex: '',
			activeSubMenu: '',
			// activeName: 'Com_1',
			data: arr,
		}
	},
	components: {
		Com_1,
		Com_2,
	},
	methods: {
		handleClick() { },
		handleSelect(val) {
			this.activeMenuIndex = val.split(',')[1]
			this.$router.push({ path: this.activeMenuIndex })
			console.log(this.activeMenu);
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('created');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		console.log('mounted');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	},
	beforeDestory() {
		console.log('beforeDestory');
	},
	destoryed() {
		console.log('destoryed');
	},
}
</script>

<style lang="scss" scoped>
.AboutView {
	width: 100%;
	height: 100%;
	.Left_menu {
		position: fixed;
		height: 100%;
		width: 150px;
	}
	:deep(.el-scrollbar__bar.is-horizontal){
		display: none;
	}
}
</style>