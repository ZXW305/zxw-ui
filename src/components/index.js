/**
 * Created by Administrator on 2019/3/29.
 */
import Vue from 'vue'
import Welcome from './Welcome.vue'
import Head from './common/Head.vue'
import ButtonGroup from './common/ButtonGroup.vue'
import Form from './common/Form.vue'
import Mask from './common/Mask.vue'
import FormItem from './common/FormItem.vue'
import Dialog from './dialog/Dialog.vue'
import TabBar from './nav/TabBar.vue'
import Toast from './toast/Toast.vue'
const Components = {
    Welcome,
    Head,
    ButtonGroup,
    Form,
    Mask,
    FormItem,
    Dialog,
    TabBar,
    Toast,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
