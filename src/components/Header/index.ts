import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class Header extends Vue {

  private enableEdit: boolean = false;
  @Prop() private title!: string;

  get activeLanguage(): string {
    return this.$i18n.locale;
  }

  private handleLanguage(lang: string): void {
    this.$i18n.locale = lang;
  }
}
