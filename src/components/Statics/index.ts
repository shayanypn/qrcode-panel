import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class Statics extends Vue {

  @Prop() private title!: string;
  @Prop() private face!: string;
  @Prop() private denominator!: string;
}
