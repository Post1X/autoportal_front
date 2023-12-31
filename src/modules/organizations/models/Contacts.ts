import AbstractModel from '../../../settings/abstrcations/models/AbstractModel';

export class Contacts extends AbstractModel {
  orderBanner: string = '';
  report: string = '';
  support: string = '';
  storeLinkIOS: string = '';
  storeLinkAndroid: string = '';

  constructor(props: any) {
    super();
    this.load(props);
  }
}
