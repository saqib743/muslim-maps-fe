export interface CommentsProps {
  profilePicture: any;
  name: string;
  location: string;
  rating: number;
  title: string;
  description: string;
  attachments: {
    logo: any;
  }[];
  publishDate: string;
  likes: number;
  locale: string;
}
