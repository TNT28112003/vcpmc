import lodash from 'lodash';

export class PaginationEntity {
  pageSize?: number;

  current?: number = 1;

  total?: number = undefined;

  search?: string;

  sortQuery?: string;

  nextPage?: string;

  PreviousPage?: string;

  hasNext?: boolean;

  hasPrevious?: boolean;

  private static initPaginationEntity = null;

  constructor(pagination?: Partial<PaginationEntity>) {
    if (!pagination) {
      return;
    }
    this.pageSize = lodash.get(pagination, 'pageSize', 100000000);
    this.current = lodash.get(pagination, 'current', 1);
    this.total = lodash.get(pagination, 'totalCount', 0);
    this.search = lodash.get(pagination, 'search', undefined);
    this.hasNext = lodash.get(pagination, 'hasNext', undefined);
    this.hasPrevious = lodash.get(pagination, 'hasNext', undefined);
    this.nextPage = lodash.get(pagination, 'nextPage', undefined);
    this.PreviousPage = lodash.get(pagination, 'PreviousPage', undefined);
  }

  static init() {
    if (PaginationEntity.initPaginationEntity != null) {
      return PaginationEntity.initPaginationEntity;
    }
    PaginationEntity.initPaginationEntity = null;
    return PaginationEntity.initPaginationEntity;
  }
}
