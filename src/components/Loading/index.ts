import { Component, Vue } from "vue-property-decorator";
import WithRender from "./template.html";

@WithRender
@Component
export default class Loading extends Vue {
}
