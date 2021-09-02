<template>
  <div style="margin: 20px;">
        <section>
            <h3>Simple el-input</h3>
            <el-input v-model="elInput" placeholder="Text"></el-input>
            <el-input v-model="elInput" size="medium" placeholder="Text"></el-input>
            <el-input v-model="elInput" size="small" placeholder="Text"></el-input>
            <el-input v-model="elInput" size="mini" placeholder="Text"></el-input>
            <el-input
                size="medium"
                prefix-icon="el-icon-search"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="elInput">
            </el-input>
            <el-input
                size="small"
                prefix-icon="el-icon-search"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="elInput">
            </el-input>
            <el-input
                size="mini"
                prefix-icon="el-icon-search"
                placeholder="Pick a date"
                suffix-icon="el-icon-date"
                v-model="elInput">
            </el-input>

            <el-input v-model="elInput" placeholder="Text" type="textarea"></el-input>
        </section>

        <section>
            <h3>Pseudo el-input (auto adjusts width)</h3>
            <el-pseudo-input v-model="elInput"></el-pseudo-input>
        </section>

        <section>
            <h3>Simple el-select</h3>
            <el-select v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
            <el-select size="medium" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
            <el-select size="small" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
            <el-select size="mini" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <h3>Auto resizable and borderless el-select (uses el-pseudo-input)</h3>
            <el-select v-model="elSelectValue" :autoResize="true" :borderless="true">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <h3>El-select empty</h3>
            <el-select v-model="elSelectValue">
                <el-option v-for="item in []" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <h3>Multiple el-select</h3>
            <el-select :multiple="true" v-model="elSelectMultiValue">
                <el-option v-for="item in elSelectItems" :key="item" :value="item" :label="item"></el-option>
            </el-select>
        </section>

        <section>
            <el-button>Default</el-button>
            <el-button size="medium">Medium</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button>
        </section>

        <section>
            <el-button type="primary">Primary</el-button>
            <el-button type="primary" size="medium">Medium</el-button>
            <el-button type="primary" size="small">Small</el-button>
            <el-button type="primary" size="mini">Mini</el-button>
        </section>

        <section>
            <el-button type="success">Success</el-button>
            <el-button type="success" size="medium">Medium</el-button>
            <el-button type="success" size="small">Small</el-button>
            <el-button type="success" size="mini">Mini</el-button>
        </section>

        <section>
            <el-button type="secondary">Secondary</el-button>
            <el-button type="secondary" size="medium">Medium</el-button>
            <el-button type="secondary" size="small">Small</el-button>
            <el-button type="secondary" size="mini">Mini</el-button>
        </section>

        <section>
            <el-button type="text">Text</el-button>
            <el-button type="text" size="medium">Medium</el-button>
            <el-button type="text" size="small">Small</el-button>
            <el-button type="text" size="mini">Mini</el-button>
        </section>

        <section>
            <el-button type="text" plain>Text plain</el-button>
            <el-button type="text" size="medium" plain>Medium</el-button>
            <el-button type="text" size="small" plain>Small</el-button>
            <el-button type="text" size="mini" plain>Mini</el-button>
        </section>

        <section>
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Default</el-button>
            <el-button type="primary" plain size="medium">Medium</el-button>
            <el-button type="primary" plain size="small">Small</el-button>
            <el-button type="primary" plain size="mini">Mini</el-button>
        </section>

        <section>
            <el-button icon="el-icon-edit"></el-button>
            <el-button icon="el-icon-edit" size="medium"></el-button>
            <el-button icon="el-icon-edit" size="small"></el-button>
            <el-button icon="el-icon-edit" size="mini"></el-button>
            <el-button icon="el-icon-download" size="mini"></el-button>
            <el-button type="primary" icon="el-icon-circle-plus">Search</el-button>
        </section>

        <section>
            <el-switch v-model="elSwitchValue" active-text="Checked">
            </el-switch>
        </section>

        <section>
            <el-checkbox :indeterminate="false" v-model="elCheckboxValue">Option</el-checkbox>
        </section>

        <section>
            <el-radio v-model="elRadioValue" label="1">Option A</el-radio>
        </section>

        <section>
            <el-radio-group v-model="elRadioGroup">
                <el-radio-button label="New York"></el-radio-button>
                <el-radio-button label="Washington"></el-radio-button>
            </el-radio-group>
        </section>

        <section>
            <el-radio-group :plain="true" v-model="elRadioGroup">
                <el-radio-button label="New York"></el-radio-button>
                <el-radio-button label="Washington"></el-radio-button>
            </el-radio-group>
        </section>

        <section>
            <el-checkbox-group v-model="elCheckboxGroup">
                <el-checkbox-button v-for="city in elCities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </section>

        <section>
            <el-checkbox-group v-model="elCheckboxGroup" :plain="true">
                <el-checkbox-button v-for="city in elCities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        elCities: ['New York', 'Washington', 'London'],
        elInput: 'Hello Element UI!',
        elSelectValue: "",
        elSelectItems: ["Hello", "How are", "Ok bye"],
        elSelectMultiValue: [],
        elSwitchValue: true,
        elCheckboxValue: true,
        elRadioValue: '1',
        elRadioGroup: 'New York',
        elCheckboxGroup: ['New York']
      };
    },
  };
</script>
<style>
section {
    margin: 20px;
}
</style>
