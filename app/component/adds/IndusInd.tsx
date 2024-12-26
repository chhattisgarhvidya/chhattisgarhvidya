import { useGlobalState } from '@/context/GlobalContext';
import { ArrowRight, Percent, CreditCard, Wallet } from 'lucide-react';

export function IndusInd() {
  const { toggle } = useGlobalState(); // Ensure the hook is called unconditionally

  return (
    <div className="overflow-hidden rounded-lg bg-[#8B1D22] text-white shadow-lg max-w-sm">
      {/* Header */}
      <div className="bg-[#E24B46] relative flex justify-between p-3">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          <h3 className="font-semibold">IndusInd Bank Accounts</h3>
        </div>
        <button
          onClick={toggle}
          className="text-xl right-5 absolute"
          aria-label="Close"
        >
          X
        </button>
      </div>

      {/* Content */}
      <a
        href="https://leaduploader.com/refer?ref=eyJpdiI6Iklsd1BpbmYxclNVTW9NSElVakZoRFE9PSIsInZhbHVlIjoiTm44bENzSWc3YXNjV0sxOHB0WUVEQT09IiwibWFjIjoiNDE3MzA5YWI2ZDFlZDNlOTI3ODI1YTI2NWRmNjRkMGJmMjNlNDZlZmUwNWFkYWVjMDYxOTUyMzBmNmU4NTIzNCIsInRhZyI6IiJ9"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggle}
      >
        <div className="p-4">
          <div className="mb-4 space-y-2">
            <h4 className="text-lg font-bold text-[#FFD700]">
              Open an Account Today!
            </h4>
            <p className="text-sm text-white/90">
              Experience the best of online banking with exclusive offers.
            </p>
          </div>

          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-[#FFD700]" />
              <span>High interest savings accounts</span>
            </li>
            <li className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-[#FFD700]" />
              <span>Zero balance salary accounts</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-[#FFD700]" />
              <span>Quick and easy online account opening</span>
            </li>
          </ul>

          <button className="w-full flex items-center justify-center py-3 rounded bg-[#FFD700] text-[#8B1D22] hover:bg-[#FFD700]/90 font-semibold">
            Open Account Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </a>

      {/* Footer */}
      <div className="bg-black/10 px-4 py-2">
        <p className="text-xs text-white/70">
          *Terms and conditions apply. Offers subject to change.
        </p>
      </div>
    </div>
  );
}
