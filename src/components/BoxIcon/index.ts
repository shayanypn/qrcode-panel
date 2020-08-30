import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class BoxIcon extends Vue {
  @Prop() private title!: string;
  @Prop() private icon!: string;
}
