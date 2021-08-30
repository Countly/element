<template>
  <div style="margin: 20px;">
        <section>
            <h3>Simple el-input</h3>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <h3>Pseudo el-input (auto adjusts width)</h3>
            <el-pseudo-input v-model="input"></el-pseudo-input>
        </section>

        <section>
            <h3>Simple el-select</h3>
            <el-select v-model="selectValue">
                <el-option v-for="item in selectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <h3>Auto resizable and borderless el-select (uses el-pseudo-input)</h3>
            <el-select v-model="selectValue" :autoResize="true" :borderless="true">
                <el-option v-for="item in selectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <h3>Multiple el-select</h3>
            <el-select :multiple="true" v-model="selectMultiValue">
                <el-option v-for="item in selectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <el-button>Default</el-button>
            <el-button size="medium">Medium</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button>
        </section>

        <section>
            <el-switch v-model="switchValue">
            </el-switch>
        </section>

        <section>
            <el-checkbox :indeterminate="false" v-model="checkboxValue">Option</el-checkbox>
        </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
        selectValue: "",
        selectItems: [1,2,3,4,5],
        selectMultiValue: [],
        switchValue: true,
        checkboxValue: true
      };
    },
  };
</script>
<style>
section {
    margin: 20px;
}
</style>
