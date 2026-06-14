import { WHATSAPP_URL } from "@/constants/contants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const bookingHref = (label: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Bonjour SIIOU, je souhaite réserver : ${label}.`,
  )}`;