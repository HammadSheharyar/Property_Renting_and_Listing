
// Import directly from the original source components
import { toast as sonnerToast } from "sonner";
import { useToast as useToastHook } from "@radix-ui/react-toast";

// Re-export the hooks and functions with the names the rest of the application expects
export const useToast = useToastHook;
export const toast = sonnerToast;
