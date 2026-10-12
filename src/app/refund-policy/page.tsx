import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessData } from "@/data/business";
import { FileText, ArrowLeft, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Calcutta Agri Tech",
  description: "Official Refund and Cancellation Policy for Calcutta Agri Tech. Clarifies commercial contract terms, order cancellation, and industrial machinery agreements.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col font-sans selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      <header className="sticky top-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#25221D]/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#25221D] hover:text-[#B08A3E] transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
          >
            <ArrowLeft className="w-4 h-4 text-[#806329]" />
            <span>Return to Plant Overview</span>
          </Link>

          <div className="text-xs font-mono uppercase tracking-widest text-[#806329]">
            COMMERCIAL TERMS
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 border-b border-[#25221D]/15 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE7D8] border border-[#B08A3E]/30 rounded-xs text-xs font-mono text-[#806329] font-bold">
              <FileText className="w-3.5 h-3.5" />
              <span>COMMERCIAL TERMS • CALCUTTA AGRI TECH</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              Refund & Cancellation Policy
            </h1>
            <div className="text-xs font-mono text-[#635C52] space-x-4">
              <span>Effective Date: January 1, 2026</span>
              <span>•</span>
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Industrial B2B Terms</span>
            </div>
          </div>

          <div className="p-6 rounded-xs bg-[#FBF8F1] border border-[#B08A3E]/30 text-xs sm:text-sm text-[#635C52] space-y-3 leading-relaxed">
            <div className="flex items-center gap-2 font-mono uppercase font-bold text-[#25221D]">
              <AlertCircle className="w-4 h-4 text-[#806329]" />
              <span>Notice Concerning Online Retail Transactions</span>
            </div>
            <p>
              Calcutta Agri Tech operates as an industrial manufacturer, engineer, and supplier of heavy rice mill machinery, optical color sorters, and turnkey grain processing plants. 
              <strong> This website does not function as an e-commerce retail store and does not accept direct digital checkout payments, credit card transactions, or online shopping cart purchases.</strong>
            </p>
            <p>
              All equipment orders, custom plant layouts, fabrication commitments, and spare parts purchases are conducted through formal bilateral commercial proposals, signed supply contracts, or official purchase orders (PO).
            </p>
          </div>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              1. Commercial Equipment Orders & Bilateral Contracts
            </h2>
            <p>
              Because rice milling machinery (such as Gravity Destoners, Multi-Stage Whiteners, and Optical Color Sorters) requires precision engineering, custom metal fabrication, and application-specific calibration, all commercial sales are governed exclusively by the terms and conditions set forth in each individually executed sales agreement or written pro-forma invoice.
            </p>
            <p>
              The specific cancellation terms, milestones, progress payments, delivery schedules, and warranty provisions detailed in your formal commercial contract supersede any general website descriptions.
            </p>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              2. Order Cancellation Procedures
            </h2>
            <p>
              In the event that a client requests cancellation of an equipment purchase or turnkey project:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#25221D]">Prior to Custom Fabrication / Sourcing:</strong> If an order cancellation request is submitted in writing prior to the commencement of custom structural steel fabrication, pneumatic roll assembly, or procurement of specialized optical components, cancellation is evaluated pursuant to the deposit retention terms specified in the contract.
              </li>
              <li>
                <strong className="text-[#25221D]">After Commencement of Fabrication:</strong> Once custom structural manufacturing, machine chassis fabrication, or electrical PLC programming has commenced, advance payments and procurement expenses incurred are generally non-refundable, as equipment is customized to the client&apos;s plant footprint.
              </li>
              <li>
                <strong className="text-[#25221D]">Written Notice Required:</strong> All cancellation notices must be formally submitted in writing to our registered office or official email at <code className="bg-[#EFE7D8] px-1 py-0.5 rounded-xs font-mono text-[#25221D]">inquiries@calcuttaagritech.com</code>.
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              3. Inspection, Commissioning & Returns
            </h2>
            <p>
              Due to the industrial scale and weight of heavy grain processing machinery:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Factory Pre-Dispatch Inspection:</strong> Clients or their authorized technical representatives are welcome to conduct factory inspection trials at our Sodepur depot or manufacturing floor prior to transport dispatch.
              </li>
              <li>
                <strong>Transit and Unloading:</strong> Physical damage incurred during client-arranged transit or site unloading must be reported to the freight carrier immediately upon arrival.
              </li>
              <li>
                <strong>Replacement of Defective Parts:</strong> In the event that a component exhibits manufacturing defects upon initial site commissioning, Calcutta Agri Tech will service, repair, or replace the defective part in accordance with the agreed equipment warranty terms.
              </li>
              <li>
                <strong>Consumables:</strong> Wear-and-tear consumables (e.g., rubber rolls, emery stones, wire mesh screens, sorter wiper blades) are subject to inspection upon receipt and are not eligible for post-operation return once placed into harvest production runs.
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              4. Commercial Dispute Resolution & Owner Discretion
            </h2>
            <p>
              Refund processing timelines, where mutually agreed under a formal contract amendment, typically process through commercial bank wire transfers within the timeline specified in the contract (normally 15–30 business days from signed settlement).
            </p>
            
            <div className="bg-[#FBF8F1] border border-[#25221D]/15 rounded-xs p-6 space-y-3 font-mono text-xs">
              <div className="text-[#25221D] font-bold uppercase">
                Commercial Contract & Invoicing Support Desk:
              </div>
              <div className="space-y-1.5 text-[#635C52]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#25221D]">{businessData.name}</span>
                  <span>(Engineering Desk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#806329]" />
                  <span>{businessData.contact.address}, {businessData.contact.city} — {businessData.contact.pincode}, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#806329]" />
                  <a href={`mailto:${businessData.contact.email}`} className="text-[#806329] hover:underline">
                    {businessData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#806329]" />
                  <span>{businessData.contact.phone}</span>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
