export type AssetRaw = {
  name: string;
  id: string;
  src: string;
};

export enum AssetCategory {
  Inbox = 'INBOX',
  Trash = 'TRASH',
}
