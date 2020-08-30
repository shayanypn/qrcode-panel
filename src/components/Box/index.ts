import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class Box extends Vue {

  @Prop() private title!: string;
  @Prop() private face!: string;
  @Prop() private classname!: string;

  get classObject(): string[] {
    return ['bx', ...(this.classname || '').split(' ')];
  }
}
