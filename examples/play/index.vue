<template>
  <div style="margin: 20px;">
        <section>
            <h3>Simple el-input</h3>
            <el-input v-model="input" placeholder="Text"></el-input>
            <el-input v-model="input" size="medium" placeholder="Text"></el-input>
            <el-input v-model="input" size="small" placeholder="Text"></el-input>
            <el-input v-model="input" size="mini" placeholder="Text"></el-input>
            <el-input
                size="medium"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="input">
            </el-input>
            <el-input
                size="small"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="input">
            </el-input>
            <el-input
                size="mini"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="input">
            </el-input>
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
            <el-select size="medium" v-model="selectValue">
                <el-option v-for="item in selectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
            <el-select size="small" v-model="selectValue">
                <el-option v-for="item in selectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
            <el-select size="mini" v-model="selectValue">
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
            <el-switch v-model="switchValue" active-text="Checked">
            </el-switch>
        </section>

        <section>
            <el-checkbox :indeterminate="false" v-model="checkboxValue">Option</el-checkbox>
        </section>

        <section>
            <el-radio v-model="radioValue" label="1">Option A</el-radio>
        </section>

        <section>
            <el-radio-group v-model="radioGroup">
                <el-radio-button label="New York"></el-radio-button>
                <el-radio-button label="Washington"></el-radio-button>
            </el-radio-group>
        </section>

        <section>
            <el-checkbox-group v-model="checkboxGroup">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cities: ['New York', 'Washington', 'London'],
        input: 'Hello Element UI!',
        selectValue: "",
        selectItems: [1,2,3,4,5],
        selectMultiValue: [],
        switchValue: true,
        checkboxValue: true,
        radioValue: '1',
        radioGroup: 'New York',
        checkboxGroup: ['New York']
      };
    },
  };
</script>
<style>
section {
    margin: 20px;
}
</style>
