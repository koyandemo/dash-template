import { create } from 'zustand';

type DialogType = {
  open: boolean;
  type: 'route' | 'action' | null;
  confirmRoute: string | null;
  openDialog: (
    type: 'route' | 'action' | null,
    confirmRoute: string | null
  ) => void;
  closeDialog: () => void;
};

const useDialog = create<DialogType>((set) => ({
  open: false,
  type: null,
  confirmRoute: null,

  openDialog: (type, confirmRoute) =>
    set(() => ({ open: true, type, confirmRoute })),
  closeDialog: () => set(() => ({ open: false })),
}));

export default useDialog;
