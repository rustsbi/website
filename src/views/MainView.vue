<template>
  <Layout>
    <div class="section">
      <div
        class="headline"
        style="max-width: 1160px"
      >
        <h2 class="headline--title">
          {{ $t("message.whatIsTitle") }}
        </h2>
        <div class="headline--container">
          <div class="headline--header">
            <p class="headline--description">
              {{ $t("message.whatIsContent") }}
            </p>
          </div>
          <div class="headline--right">
            <a
              class="headline--right headline--button"
              href="https://docs.rs/rustsbi/latest/rustsbi"
            >get start</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="section_divider -narrow">

    <div class="section">
      <div
        class="container"
        style="max-width: 1160px"
      >
        <div class="section--header">
          <h2 class="section--title">
            {{ $t("message.whatCanDoTitle") }}
          </h2>
          <div class="index-container">
            <div class="row">
              <div class="col1">
                <h3 class="canDo--title">
                  {{ $t("message.whatCanDoTitle1") }}
                </h3>
                <p class="canDo--description">
                  {{ $t("message.whatCanDoContent1") }}
                </p>
              </div>
              <div class="col1">
                <h3 class="canDo--title">
                  {{ $t("message.whatCanDoTitle2") }}
                </h3>
                <p class="canDo--description">
                  {{ $t("message.whatCanDoContent2") }}
                </p>
              </div>
              <div class="col1">
                <h3 class="canDo--title">
                  {{ $t("message.whatCanDoTitle3") }}
                </h3>
                <p class="canDo--description">
                  {{ $t("message.whatCanDoContent3") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="section_divider -narrow">

    <div class="section">
      <div
        class="container"
        style="max-width: 1160px"
      >
        <div class="section--header">
          <h2 class="section--title">
            {{ $t("message.theyAreUsingTitle") }}
          </h2>
        </div>

        <div class="users-container">
          <div
            v-for="(user, index) in userList"
            :key="index"
            class="users"
          >
            <div class="users_item">
              <img
                class="users_item--logo"
                :src="user.cover"
                alt=""
              >
              <h3 class="users_item--title">
                <p>
                  <a
                    :href="user.url"
                    target="_blank"
                    style="word-break: break-all"
                  >
                    {{ user.title }}
                  </a>
                </p>
              </h3>
              <div
                v-if="$i18n.locale === 'en'"
                class="users_item--text"
              >
                <p>
                  {{ user.textEn }}
                </p>
              </div>
              <div
                v-if="$i18n.locale === 'zh'"
                class="users_item--text"
              >
                <p>
                  {{ user.textZh }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
  name: "MainView",
  components: { Layout },
  data() {
    return {
      userList: [
        {
          id: 1,
          cover: require("../assets/images/user/01.jpg"),
          title: "DragonOS",
          url: "https://github.com/DragonOS-Community/DragonOS",
          textEn:
            "DragonOS is an operating system developed from scratch using Rust, with Linux compatibility",
          textZh:
            "DragonOS 是使用 Rust 从0自研内核，具有 Linux 兼容性的操作系统",
        },
        {
          id: 2,
          cover: require("../assets/images/user/02.jpg"),
          title: "oreboot",
          url: "https://github.com/oreboot/oreboot",
          textEn:
            "oreboot is a downstream fork of coreboot, mostly written in Rust",
          textZh: "oreboot 是 coreboot 的一个下游分支，主要用 Rust 编写",
        },
        {
          id: 3,
          cover: require("../assets/images/user/03.jpg"),
          title: "rustyvisor",
          url: "https://github.com/iankronquist/rustyvisor",
          textEn: "rustyvisor is a hypervisor written in Rust",
          textZh: "rustyvisor 是一个基于 Rust 的虚拟机管理程序",
        },
        {
          id: 4,
          cover: require("../assets/images/user/04.jpg"),
          title: "rCore",
          url: "https://github.com/rcore-os/rCore",
          textEn: "rCore is a Rust version of THU uCore OS",
          textZh: "rCore 是 Rust 版本的清华大学 uCore 操作系统",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
