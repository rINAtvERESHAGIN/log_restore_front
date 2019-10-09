<template>
<div>
<Main></Main>
<!--  <TestComponent></TestComponent>-->
</div>

</template>

<script>

import TestComponent from "./components/TestComponent";
import Main from "./components/modules/Main";
export default {
  name: 'App',
  components: {

    TestComponent,
    Main,
  },
  data: () => ({
    //
  }),
};
</script>
