import Link from "next/link";
import { Phone, Clock } from "lucide-react";
import businessData from "@/config/business-data";

export default function QuickInfoBar() {
  const { phone, openingHours, ctaLabel } = businessData;
  const firstHours = openingHours[0];

  return (
    <div style={{ backgroundColor: "var(--color-accent)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6">
        {firstHours && (
          <div className="flex items-center gap-2">
            <Clock
              size={14}
              className="text-[#0F1B2D] flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-inter text-xs font-semibold text-[#0F1B2D]">
              {firstHours.day}: {firstHours.hours}
            </span>
          </div>
        )}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
        >
          <Phone
            size={14}
            className="text-[#0F1B2D] flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-inter text-xs font-bold text-[#0F1B2D]">
            {phone}
          </span>
        </a>
        <Link
          href="/booking"
          className="font-inter text-xs font-bold text-[#0F1B2D] underline underline-offset-2 transition-opacity duration-200 hover:opacity-70"
        >
          {ctaLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
