'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import useDialog from '@/store/useDialog';
import { signOut } from 'next-auth/react';
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
      if (confirmRoute === '/sign-in') {
        signOut({ callbackUrl: confirmRoute });
      }
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
          <Button
            type="button"
            label="Cancle"
            isOutline={true}
            callBack={handleCancel}
          />
          <Button type="button" label="Confirm" callBack={handleConfirm} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
