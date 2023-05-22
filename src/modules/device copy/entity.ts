class RecordEntity {
  reoordId: string = '';
  name: string = '';
  ISRC: string = '';
  time: string = '';
  singer: string = '';
  author: string = '';
  category: string = '';
  format: string = '';
  expiryDate: string = '';
  image: string = '';
  video: string = '';

  constructor(record?: Partial<RecordEntity>) {
    if (!record) {
      return;
    }
    Object.assign(this, record);
  }
}

export default RecordEntity;
