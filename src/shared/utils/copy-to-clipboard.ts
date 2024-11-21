import { toast } from 'sonner';

export const copyToClipboard = (text: string | undefined | null) => {
  if (!text) {
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard');
  });
};
