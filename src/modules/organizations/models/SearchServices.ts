import AbstractModel from '../../../settings/abstrcations/models/AbstractModel';

export class SearchServices extends AbstractModel {
  title: string = '';
  categoryId: string = '';
  service_id: string = '';

  constructor(props: any) {
    super();
    this.load(props);
  }
}
