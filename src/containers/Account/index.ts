import { Component, Vue } from "vue-property-decorator";
import WithRender from "./template.html";
import API from '@/services/API';
import { IUser, IPlan } from '@/types';
import Box from "@/components/Box";
import BoxIcon from "@/components/BoxIcon";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

@WithRender
@Component({
  components: {
    Header,
    Box,
    BoxIcon,
    Loading,
  },
})
export default class Account extends Vue {
  private enableLoading: boolean = false;
  private modelUser: IUser = {} as IUser;
  private modelPlan: IPlan = {} as IPlan;

  handleSubmit(): void {
    this.enableLoading = true;

    API.storeUser(this.modelUser)
    .then(res => res.json())
    .then(() => this.enableLoading = false);
  }

  fetchUser() {
    return API.fetchUser()
    .then(res => res.json())
    .then((response: IUser) => this.modelUser = response)
  }

  fetchPlan() {
    return API.fetchPlan()
    .then(res => res.json())
    .then((response: IPlan) => this.modelPlan = response)
  }

  async created() {
    this.enableLoading = true;

    Promise.all([
      this.fetchUser(),
      this.fetchPlan()
    ]).then(() => this.enableLoading = false);
  }
}
