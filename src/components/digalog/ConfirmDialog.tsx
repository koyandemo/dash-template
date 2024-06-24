'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/src/components/ui/alert-dialog';
import useDialog from '@/src/store/useDialog';
import { useRouter } from 'next/navigation';
import Button from '../button/Button';

export function ConfirmDialog() {
  const router = useRouter();
  const { open, type, confirmRoute, closeDialog } = useDialog();

  const handleCancel = () => {
    closeDialog();
  };

  const handleConfirm = () => {
    if (type === 'route' && confirmRoute) {
      router.push(confirmRoute);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button label="Cancle" isOutline={true} callBack={handleCancel} />
          <Button label="Confirm" callBack={handleConfirm} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
