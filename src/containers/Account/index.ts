import { Component, Vue } from "vue-property-decorator";
import WithRender from "./template.html";
import Box from "@/components/Box";
import BoxIcon from "@/components/BoxIcon";
import Header from "@/components/Header";

@WithRender
@Component({
  components: {
    Header,
    Box,
    BoxIcon,
  },
})
export default class Account extends Vue {
}
