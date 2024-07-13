export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  date: Date | null;
  location: string | null;
  title: string | null;
  organizer: string | null;
};
