import { WHATSAPP_PHONE } from "../constants/contants"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const bookingHref = (label: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Bonjour SIIOU, je souhaite réserver : ${label}.`,
  )}`;
