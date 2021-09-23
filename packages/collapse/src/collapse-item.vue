<template>
  <div class="el-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`el-collapse-content-${id}`"
      :aria-describedby ="`el-collapse-content-${id}`"
    >
      <div
        class="el-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`el-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <i
          v-if="iconPosition === 'left'"
          class="el-collapse-item__arrow el-collapse-item__arrow--left"
          :class="iconClass">
        </i>
        <slot name="title">{{title}}</slot>
        <i
          v-if="iconPosition === 'right'"
          class="el-collapse-item__arrow el-collapse-item__arrow--right"
          :class="iconClass">
        </i>
      </div>
    </div>
    <el-collapse-transition>
      <div
        class="el-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`el-collapse-head-${id}`"
        :id="`el-collapse-content-${id}`"
      >
        <div class="el-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import Emitter from 'element-ui/src/mixins/emitter';
  import { generateId } from 'element-ui/src/utils/util';

  export default {
    name: 'ElCollapseItem',

    componentName: 'ElCollapseItem',

    mixins: [Emitter],

    components: { ElCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean,
      icon: {
        type: Object,
        default() {
          return {
            position: 'left',
            direction: 'right'
          };
        }
      }
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
      iconPosition() {
        if (this.icon.position === 'right') {
          return 'right';
        } else {
          return 'left';
        }
      },
      iconClass() {
        let iconClass = {
          'is-active': this.isActive
        };

        if (this.icon.direction === 'right') {
          iconClass['ion-arrow-right-b'] = true;
        } else if (this.icon.direction === 'down') {
          iconClass['ion-arrow-down-b'] = true;
        } else if (this.icon.direction === 'left') {
          iconClass['ion-arrow-left-b'] = true;
        } else if (this.icon.direction === 'up') {
          iconClass['ion-arrow-up-b'] = true;
        } else {
          iconClass['ion-arrow-right-b'] = true;
        }

        return iconClass;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('ElCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('ElCollapse', 'item-click', this);
      }
    }
  };
</script>
