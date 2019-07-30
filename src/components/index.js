/**
 * Created by Administrator on 2019/3/29.
 */
import Vue from 'vue'
import Welcome from './Welcome.vue'
import Dialog from './dialog/Dialog.vue'
import Toast from './toast/Toast.vue'
import Head from './common/Head.vue'
import ButtonGroup from './common/ButtonGroup.vue'
import FormItem from './common/FormItem.vue'
const Components = {
    Welcome,
    Dialog,
    Toast,
    Head,
    FormItem,
    ButtonGroup,

}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
