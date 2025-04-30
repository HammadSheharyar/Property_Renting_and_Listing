
// Import directly from sonner for the toast function
import { toast } from "sonner";
// Import from our own toast.tsx file which provides the useToast hook
import { type ToastProps, type ToastActionElement } from "@/components/ui/toast";

const useToast = () => {
  return {
    toast,
    // Default implementation similar to shadcn
    toasts: [] as {
      id: string;
      title?: string;
      description?: string;
      action?: ToastActionElement;
    }[],
  };
};

export { useToast, toast, type ToastProps, type ToastActionElement };
