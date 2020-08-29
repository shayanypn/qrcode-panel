import { Component, Vue } from "vue-property-decorator";
import WithRender from "./template.html";
import Statics from "@/components/Statics";
import BoxIcon from "@/components/BoxIcon";

@WithRender
@Component({
  components: {
    Statics,
    BoxIcon,
  },
})
export default class Account extends Vue {
}
