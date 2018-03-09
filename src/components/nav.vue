<template>
  <footer>
    <section class="footer">
      <ul>
        <li>
          <router-link :to="{name: 'INDEX'}">
            <i class="iconFont">&#xe60a;</i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{path: '/invest'}">
            <i class="iconFont">&#xe608;</i>
            <p>理财中心</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'UC'}">
            <i class="iconFont">&#xe607;</i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {}
    }
  }
</script>
