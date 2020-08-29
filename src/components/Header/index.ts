import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class HelloWorld extends Vue {
  private enableEdit: boolean = false;

  @Prop() private title!: string;
}
