
import { toast as sonnerToast } from "@/components/ui/sonner";
import { useToast as useToastHook } from "@/components/ui/use-toast";

// Re-export the hooks and functions with the names the rest of the application expects
export const useToast = useToastHook;
export const toast = sonnerToast;
