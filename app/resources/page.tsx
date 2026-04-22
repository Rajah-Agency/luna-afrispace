import { Metadata } from 'next';
import { MentorsClientPage } from './client-page';

export const metadata: Metadata = {
  title: 'Resources - LUNA',
  description:
    'Connect with Africa’s leading space professionals and access valuable resources.',
};

export default function MentorsPage() {
  return <MentorsClientPage />;
}
