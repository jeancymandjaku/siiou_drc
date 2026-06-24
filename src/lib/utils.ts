import { createWhatsAppUrl } from "../constants/constants"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const bookingHref = (label: string) =>
  createWhatsAppUrl(
    `Bonjour SIIOU, je souhaite réserver : ${label}.`,
  );
