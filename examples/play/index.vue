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
            <el-pseudo-input v-model="elInput" :min-width="50" :max-width="100"></el-pseudo-input>
        </section>

        <section>
            <h3>Simple el-select</h3>
            <el-select isFullWidth v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
            <el-select isFullWidth size="medium" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
            <el-select size="small" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
            <el-select isFullWidth size="mini" v-model="elSelectValue">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
        </section>

        <section>
            <h3>el-select-head</h3>
            <el-select-head :options-lookup="elSelectItems" v-model="elSelectValue"></el-select-head>
        </section>

        <section>
            <h3>Auto resizable and borderless el-select (uses el-pseudo-input)</h3>
            <el-select v-model="elSelectValue" :adaptiveLength="true" :borderless="true">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
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
            <el-select :multiple="true" v-model="elSelectMultiValue" :collapse-tags="false">
                <el-option v-for="item in elSelectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
        </section>

        <section>
            <h3>Multiple el-select-head</h3>
            <el-select-head :multiple="true" :options-lookup="elSelectItems" v-model="elSelectMultiValue"></el-select-head>
        </section>


        <section>
            <h3>Dropdown</h3>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    Default<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown size="medium" trigger="click">
                <span class="el-dropdown-link">
                    Medium<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown size="small" trigger="click">
                <span class="el-dropdown-link">
                    Small<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown size="mini" trigger="click">
                <span class="el-dropdown-link">
                    Mini<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </section>

        <section>
            <h3>Default Buttons</h3>
            <el-button>Default</el-button>
            <el-button size="medium">Medium</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button>
        </section>

        <section>
            <h3>Success Buttons</h3>
            <el-button type="success">Default</el-button>
            <el-button type="success" size="medium">Medium</el-button>
            <el-button type="success" size="small">Small</el-button>
            <el-button type="success" size="mini">Mini</el-button>
        </section>

        <section>
            <h3>Secondary Buttons</h3>
            <el-button type="secondary">Default</el-button>
            <el-button type="secondary" size="medium">Medium</el-button>
            <el-button type="secondary" size="small">Small</el-button>
            <el-button type="secondary" size="mini">Mini</el-button>
        </section>

        <section>
            <h3>Text Buttons type - filled</h3>
            <el-button type="text">Text</el-button>
            <el-button type="text" size="medium">Medium</el-button>
            <el-button type="text" size="small">Small</el-button>
            <el-button type="text" size="mini">Mini</el-button>
        </section>

        <section>
            <h3>Text Buttons type - plain</h3>
            <el-button type="text" plain>Default</el-button>
            <el-button type="text" size="medium" plain>Medium</el-button>
            <el-button type="text" size="small" plain>Small</el-button>
            <el-button type="text" size="mini" plain>Mini</el-button>
        </section>

        <!-- <section>
            <el-button plain>Plain</el-button>
            <el-button type="success" plain>Default</el-button>
            <el-button type="success" plain size="medium">Medium</el-button>
            <el-button type="success" plain size="small">Small</el-button>
            <el-button type="success" plain size="mini">Mini</el-button>
        </section> -->

        <section>
            <h3>Icon buttons</h3>
            <el-button icon="el-icon-edit"></el-button>
            <el-button icon="el-icon-edit" size="medium"></el-button>
            <el-button icon="el-icon-edit" size="small"></el-button>
            <el-button icon="el-icon-edit" size="mini"></el-button>
            <el-button icon="el-icon-download" size="mini"></el-button>
            <el-button type="success" icon="el-icon-circle-plus">Search</el-button>
        </section>

        <section>
            <h3>Button groups</h3>
            <el-button-group>
                <el-button type="primary">Previous Page</el-button>
                <el-button type="primary">Next Page</el-button>
            </el-button-group>
        </section>

        <section>
            <h3>Switch</h3>
            <el-switch v-model="elSwitchValue" active-text="Checked">
            </el-switch>
        </section>

        <section>
            <h3>Checkbox</h3>
            <el-checkbox v-model="elCheckboxValue">Option</el-checkbox>
        </section>

        <section>
            <h3>Radio</h3>
            <el-radio v-model="elRadioValue" label="1">Option A</el-radio>
            <el-radio v-model="elRadioValue" label="2">Option B</el-radio>
        </section>

        <section>
            <h3>Radio group - filled</h3>
            <el-radio-group v-model="elRadioGroup">
                <el-radio-button label="New York"></el-radio-button>
                <el-radio-button label="Washington"></el-radio-button>
            </el-radio-group>
        </section>

        <section>
            <h3>Radio group - plain</h3>
            <el-radio-group :plain="true" v-model="elRadioGroup">
                <el-radio-button label="New York"></el-radio-button>
                <el-radio-button label="Washington"></el-radio-button>
            </el-radio-group>
        </section>

        <section>
            <h3>Checkbox group - filled</h3>
            <el-checkbox-group v-model="elCheckboxGroup">
                <el-checkbox-button v-for="city in elCities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </section>

        <section>
            <h3>Checkbox group - plain</h3>
            <el-checkbox-group v-model="elCheckboxGroup" :plain="true">
                <el-checkbox-button v-for="city in elCities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </section>

        <section>
            <h3>Collapse</h3>
            <el-collapse v-model="elActiveNames">
                <el-collapse-item title="Consistency" name="1">
                    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                </el-collapse-item>
                <el-collapse-item title="Feedback" name="2" :icon="{position: 'right'}">
                    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3" :icon="{direction: 'down', position: 'right'}">
                    <div>Simplify the process: keep operating process simple and intuitive;</div>
                    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                </el-collapse-item>
                <el-collapse-item title="Controllability" name="4" :icon="{direction: 'up'}">
                    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                </el-collapse-item>
            </el-collapse>
        </section>

        <section>
            <el-tabs style="width:250px">
                <el-tab-pane label="Tab 1 A">
                    Tab 1
                </el-tab-pane>
                <el-tab-pane label="Tab 2 AB">
                    Tab 2
                </el-tab-pane>
                <el-tab-pane label="Tab 3 ABC">
                    Tab 3
                </el-tab-pane>
                <el-tab-pane label="Tab 4 ABCD">
                    Tab 4
                </el-tab-pane>
                <el-tab-pane label="Tab 5 ABCDE">
                    Tab 5
                </el-tab-pane>
                <el-tab-pane label="Tab 6 ABCDEF">
                    Tab 6
                </el-tab-pane>
            </el-tabs>
        </section>

        <section>
            <h3>Table</h3>
            <el-table
            max-height="400"
            style="width:100%"
            row-key="id"
            :data="elTableData">
                <el-table-column
                    fixed
                    type="expand">
                </el-table-column>
                <el-table-column
                    fixed
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    fixed
                    type="switch">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.checked"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    fixed="left"
                    prop="name"
                    align="right"
                    label="Name"
                    width="320">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="Date"
                    type="clickable"
                    width="540">
                </el-table-column>
                <el-table-column
                    prop="address"
                    width="480"
                    label="Address">
                </el-table-column>
                <el-table-column
                    type="options"
                    prop="options">
                    <template slot-scope="scope">
                        <div>O</div>
                    </template>
                </el-table-column>
            </el-table>
        </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VTooltip from 'v-tooltip'

  Vue.use(VTooltip)
  export default {
    data() {
      return {
        elCities: ['New York', 'Washington', 'London'],
        elInput: 'Hello Element UI!',
        elSelectValue: "",
        elSelectItems: [
            {groupDisabled: false, visible: true, hitState: false, disabled: false, "value": "long", "label": "Loooooooong, very loooooooooooooooong thing dfadsfasdfasdfasdfdasfasfasf"},
            {groupDisabled: false, visible: true, hitState: false, disabled: false, "value":"hello", "label": "Hello"},
            {groupDisabled: false, visible: true, hitState: false, disabled: false, "value":"how_are_you", "label": "How are you?"},
            {groupDisabled: false, visible: true, hitState: false, disabled: false, "value":"bye", "label": "Ok bye"}
        ],
        elSelectMultiValue: [],
        elSwitchValue: true,
        elCheckboxValue: true,
        elRadioValue: '1',
        elRadioGroup: 'New York',
        elCheckboxGroup: ['New York', 'London'],
        elActiveNames: ['1'],
        elTableData: [{
            id: 1,
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
            checked: true
          }, {
            id: 2,
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          }, {
            id: 3,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          }, {
            id: 4,
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: true,
            children: [{
                id: 41,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            }, {
                id: 42,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            }]
          },
          {
            id: 5,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          },
          {
            id: 6,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          },
          {
            id: 7,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          },
          {
            id: 8,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            checked: false
          }]
      };
    },
  };
</script>
<style>
section {
    margin: 20px;
}
</style>
