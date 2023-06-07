import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const arrayCategory = [
  { label: 'common.all', value: 'all' },
  { label: 'common.pop', value: 'Pop' },
  { label: 'common.EDM', value: 'EDM' },
  { label: 'common.ballad', value: 'Ballad' },
];

const arraySamplePlaylist = [{ label: 'common.playlist.sample', value: 'sample' }];

export const arraySelectFilter: ISelectAndLabel[] = [
  { textLabel: 'common.category', dataString: arrayCategory, keyLabel: 'category' },
  { textLabel: 'common.playlist.sample', dataString: arraySamplePlaylist, keyLabel: '' },
];
