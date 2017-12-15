<template>
  <div class="bg"></div>
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
import { url, urlapi } from "api/config";

export default {

};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';

.bg{
  position:fixed;
  width:100%;
  height:100%;
  background:#f2f2f2;
  z-index:-1;
}
</style>