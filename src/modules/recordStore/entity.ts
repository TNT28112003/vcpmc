class RecordEntity {
  recordId: string = '';
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

  constructor(records?: Partial<RecordEntity>) {
    if (!records) {
      return;
    }
    Object.assign(this, records);
  }
}

export default RecordEntity;
